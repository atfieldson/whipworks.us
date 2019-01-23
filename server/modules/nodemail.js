"use strict";
const nodemailer = require("nodemailer");

let nodemailerPeon = {
  sendEmail: async (to, subject, message) => {

    try {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: process.env.EMAIL_ADDRESS,
               pass: process.env.EMAIL_PASSWORD
           }
       });

       let mailOptions = {
        from: '"Adam Fieldson" <atfieldson@gmail.com>', // sender address
        to: to || "atfieldson@gmail.com", // list of receivers
        cc: '"Adam Fieldson" <atfieldson@gmail.com>',
        subject: subject || "Seems like something isn't working quite right with Nodemailer", // Subject line
        text: message, // plain text body
        // html: "<b>Hello world?</b>" // html body
      };
    
      // send mail with defined transport object
      let info = await transporter.sendMail(mailOptions)
    
      console.log("Email sent: %s", info.messageId);

    } catch (error) {
      console.log(error)
    }


  }
}

module.exports = nodemailerPeon;