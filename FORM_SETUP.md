# Contact Form Setup Guide

This guide explains how to set up Google Sheets as your form backend, allowing you to:
- ✅ Receive form submissions when the website is hosted online
- ✅ View all responses in a Google Sheet
- ✅ Export responses to Excel anytime

---

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it something like "Science Contact Hub - Form Responses"
3. In **Row 1**, add these column headers:
   | A | B | C | D | E |
   |---|---|---|---|---|
   | Timestamp | Name | Email | Subject | Message |

4. **Copy the Spreadsheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
   ```

---

## Step 2: Create the Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any code in the editor and paste this:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet (the one this script is attached to)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const timestamp = e.parameter.timestamp || new Date().toISOString();
    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const subject = e.parameter.subject || '';
    const message = e.parameter.message || '';
    
    // Append row to spreadsheet
    sheet.appendRow([timestamp, name, email, subject, message]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error for debugging
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - run this manually to verify the script works
function testDoPost() {
  const testEvent = {
    parameter: {
      timestamp: new Date().toISOString(),
      name: 'Test User',
      email: 'test@example.com',
      subject: 'researcher',
      message: 'This is a test message'
    }
  };
  
  const result = doPost(testEvent);
  console.log(result.getContent());
}
```

3. **IMPORTANT**: Click **Save** (Ctrl+S or Cmd+S) to save the script

---

## Step 2.5: Test the Script (Important!)

Before deploying, test that the script works:

1. In the Apps Script editor, select **`testDoPost`** from the function dropdown (top toolbar)
2. Click **Run** ▶️
3. If prompted, click **Review permissions** → Choose your account → **Allow**
4. Check your Google Sheet - you should see a test row added!

If the test row appears, the script is working correctly. Proceed to deploy.

---

## Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure:
   - **Description**: Contact Form Handler
   - **Execute as**: Me
   - **Who has access**: **Anyone** (this is critical!)
4. Click **Deploy**
5. Click **Authorize access** and allow permissions when prompted
6. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/xxxxx/exec`)

### ⚠️ Already deployed before? You need to create a NEW deployment!

If you made changes to the script after deploying:
1. Go to **Deploy → Manage deployments**
2. Click the **pencil icon** ✏️ to edit
3. Under "Version", select **New version**
4. Click **Deploy**

Or simply create a new deployment and use the new URL.

---

## Step 4: Update Your React App

1. Open `src/pages/Contact.jsx`
2. Find this line near the top:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE'
   ```
3. Replace it with your Web App URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
   ```

---

## Step 5: Test the Form

1. Run your development server: `npm run dev`
2. Fill out and submit the contact form
3. Check your Google Sheet - a new row should appear!

---

## Viewing & Exporting Responses

### View Responses
- Simply open your Google Sheet to see all submissions
- Data includes timestamp, name, email, subject, and message

### Export to Excel
1. Open your Google Sheet
2. Go to **File → Download → Microsoft Excel (.xlsx)**
3. Your responses are now in Excel format!

### Alternative: Direct Link
You can also share a view-only link to the Google Sheet for easy access:
1. Click **Share** in Google Sheets
2. Set access to "Anyone with the link can view"
3. Copy and bookmark the link

---

## Troubleshooting

### Form not submitting?
- Check browser console for errors
- Verify the GOOGLE_SCRIPT_URL is correct
- Make sure the Apps Script is deployed as "Anyone" access

### No data in spreadsheet?
- Check the Apps Script execution logs: **Extensions → Apps Script → Executions**
- Verify the SPREADSHEET_ID is correct

### CORS errors?
- Google Apps Script handles CORS automatically
- Make sure you deployed as a Web App with "Anyone" access

---

## Optional: Email Notifications

Add this to your Apps Script to get email notifications:

```javascript
function doPost(e) {
  // ... existing code ...
  
  // After sheet.appendRow(), add:
  MailApp.sendEmail({
    to: 'your-email@example.com',
    subject: 'New Contact Form Submission',
    body: `
New message from: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `
  });
  
  // ... rest of code ...
}
```

---

## Security Notes

- The Google Apps Script URL is public, but only accepts POST requests
- Form data is validated on the frontend
- Consider adding rate limiting or CAPTCHA for production use
- Review Google's Apps Script quotas: https://developers.google.com/apps-script/guides/services/quotas
