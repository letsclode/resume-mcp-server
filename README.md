# 🧠 MCP Server

The **Model Context Protocol (MCP)** Server parses resumes, answers questions about them, and sends emails — perfect for resume-based chat systems, job platforms, and dev-mode tools.

## ✨ Features

- 📄 Upload and parse a PDF resume
- 💬 Ask questions about the uploaded resume
- 📧 Send email via an exposed endpoint (SMTP or Mailtrap)

## 🛠 Tech Stack

- Node.js + Express
- OpenAI (or your preferred LLM provider)
- Multer (file upload middleware)
- PDF-parse (for extracting text from resumes)
- Nodemailer (for sending emails)

---

## ⚙️ Environment Setup (`.env`)

Before running the project, create a `.env` file in the root folder and include:

```env
# OpenAI API Key
OPENAI_API_KEY=sk-your-key

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
