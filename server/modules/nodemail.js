"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function nodemail(to, subject, message){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let account = await nodemailer.createTestAccount();

  // atfieldson@gmail.com
  

  // create the transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'atfieldson@gmail.com',
           pass: 'knzu ialz qepj heuk'
       }
   });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Adam Fieldson" <atfieldson@gmail.com>', // sender address
    to: to, // list of receivers
    cc: '"Adam Fieldson" <atfieldson@gmail.com>',
    subject: subject, // Subject line
    text: message, // plain text body
    // html: "<b>Hello world?</b>" // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

  console.log("Email sent: %s", info.messageId);
}

nodemail().catch(console.error);

module.exports = nodemail;