/**
 * EmailJS Configuration Example
 * 
 * 1. Sign up for a free account at https://www.emailjs.com/
 * 2. Set up an email service (Gmail, Outlook, etc.)
 * 3. Create an email template with these variables:
 *    - {{from_name}} - Sender's name
 *    - {{from_email}} - Sender's email
 *    - {{subject}} - Email subject
 *    - {{message}} - Email message content
 *    - {{to_name}} - Your name (recipient)
 * 4. Copy your credentials and replace the values in script.js:
 */

// Replace these values in script.js with your actual EmailJS credentials:
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';        // From Account → API Keys
const EMAILJS_SERVICE_ID = 'your_service_id_here';        // From Email Services
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';      // From Email Templates

/**
 * Example EmailJS Template:
 * 
 * Subject: New Contact Form Message: {{subject}}
 * 
 * Body:
 * Hello {{to_name}},
 * 
 * You have received a new message from your portfolio contact form:
 * 
 * Name: {{from_name}}
 * Email: {{from_email}}
 * Subject: {{subject}}
 * 
 * Message:
 * {{message}}
 * 
 * ---
 * This message was sent from your portfolio contact form.
 */