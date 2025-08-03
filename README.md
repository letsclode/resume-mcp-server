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

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/letsclode/resume-mcp-server.git
cd resume-mcp-server
