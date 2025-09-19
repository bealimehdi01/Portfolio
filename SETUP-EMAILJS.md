# 📧 EmailJS Setup Guide

This guide will help you set up EmailJS to make the contact form fully functional.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/) and sign up for free
2. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** tab
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the connection steps
5. **Copy your Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **Email Templates** tab
2. Click **Create New Template**
3. Set up your template with these variables:

```
Subject: New Contact: {{subject}}

Hello,

You received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. **Copy your Template ID** (you'll need this)

### Step 4: Get Public Key
1. Go to **Account** → **API Keys**
2. **Copy your Public Key** (you'll need this)

### Step 5: Configure Portfolio
1. Open `script.js` in your code editor
2. Find these lines at the top:
```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';  
const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
```

3. Replace with your actual values:
```javascript
const EMAILJS_PUBLIC_KEY = 'user_abc123xyz';
const EMAILJS_SERVICE_ID = 'service_gmail123';  
const EMAILJS_TEMPLATE_ID = 'template_contact456';
```

### Step 6: Test Your Form
1. Open your portfolio website
2. Fill out and submit the contact form
3. Check your email for the message!

## 🔒 Security Note
- EmailJS public key is safe to expose in frontend code
- The actual email sending is handled securely by EmailJS
- Your email credentials are never exposed

## 🆘 Troubleshooting

**Form shows "EmailJS is not configured"**
- Double-check you replaced all three configuration values in `script.js`

**Form shows "Email service is not available"**
- Check if you have internet connection
- Verify EmailJS CDN is loading (check browser console)

**Emails not received**
- Check your spam folder
- Verify your EmailJS service is connected properly  
- Test your template in EmailJS dashboard

**Still need help?**
- Check [EmailJS documentation](https://www.emailjs.com/docs/)
- Open an issue on this repository

## 🎉 You're Done!
Your contact form is now fully functional and will send emails directly to your inbox!