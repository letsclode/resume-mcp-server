require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { parseResume } = require('./utils/parseResume');

const app = express();
const upload = multer();
app.use(cors());
app.use(express.json());

let resumeContext = ''; // This holds parsed resume text in memory

// Upload endpoint
app.post('/upload-resume', upload.single('file'), async (req, res) => {
  try {
    const buffer = req.file.buffer;
    const text = await parseResume(buffer);
    resumeContext = text;
    res.json({ message: 'Resume parsed and stored in context.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('MCP Server running on http://localhost:3000');
});

// OpenAI integration
const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/ask', async (req, res) => {
  const { question } = req.body;

  if (!resumeContext) {
    return res.status(400).json({ error: 'Resume not uploaded yet.' });
  }

  try {
    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful assistant answering questions about a resume.' },
        { role: 'user', content: `Resume:\n${resumeContext}` },
        { role: 'user', content: `Question:\n${question}` }
      ]
    });

    const answer = chatResponse.choices[0].message.content;
    res.json({ answer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




const sendEmail = require('./utils/emailSender');

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;
  try {
    const messageId = await sendEmail({ to, subject, text });
    res.json({ message: 'Email sent!', messageId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
