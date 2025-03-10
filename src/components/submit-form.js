const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Initialize the sheet
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    
    // Initialize Auth
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
    
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0]; // get first sheet
    
    // Add row
    await sheet.addRow({
      timestamp: new Date().toISOString(),
      name: data.fullName,
      address: data.address,
      email: data.email,
      phone: data.phone
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit form' })
    };
  }
};