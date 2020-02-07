"use strict";
const nodemailer = require("nodemailer");

let nodemailerPeon = {
  sendEmail: async (to, subject, message) => {
    let orderText = "";
    for (let i = 0; i < message.bullwhips.length; i++) {
      orderText =
        orderText +
        "<br/>" +
        message.bullwhips[i].type +
        " " +
        i +
        "<br/>" +
        "Color 1: " +
        message.bullwhips[i].item.color1.name +
        "<br/>" +
        "Color 2: " +
        message.bullwhips[i].item.color2.name +
        "<br/>" +
        "Waxed: " +
        message.bullwhips[i].item.waxed +
        "<br/>" +
        "Handle Pattern: " +
        message.bullwhips[i].item.pattern.name +
        "<br/>" +
        "Whip Length: " +
        message.bullwhips[i].item.whipLength.name +
        " feet <br/>" +
        "Handle Length: " +
        message.bullwhips[i].item.handleLength.name +
        " inches <br/>" +
        "Concho: " +
        message.bullwhips[i].item.concho.name +
        "<br/>" +
        "Item Cost: $" +
        message.bullwhips[i].item.total +
        "<br/>";
    }

    let html =
      // '<p>' + message.order.first_name + ' ' + message.order.last_name + ' <br/>' + message.order.shipping_street_address + '<br/>' + message.order.shipping_city + ', ' + message.order.shipping_state + ', ' + message.order.shipping_country + ', ' + message.shipping_zip + '</p>';
      `<p>  
    Order:
    <br/>
    ${orderText}
    <br/>
    Shipping Information: <br/>
    ${message.order.first_name} ${message.order.last_name} <br/>
    ${message.order.shipping_street_address} <br/>
    ${message.order.shipping_city}, ${message.order.shipping_state}, ${
        message.order.shipping_country
      }, ${message.order.shipping_zip} <br/>
    ${message.order.phone_number} <br/>
    <br/>
    Email: ${message.order.email} <br/>
    Order Notes: ${message.order.order_notes} <br/>
    <br/>
    Total: $${message.order.order_total} <br/>
    Shipping Cost: $${message.order.shipping_cost} <br/>
    Order Total: $${message.order.order_total + message.order.shipping_cost}
    </p>
    `;

    try {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_PASSWORD
        }
      });

      let mailOptions = {
        from: '"Adam Fieldson" <atfieldson@gmail.com>', // sender address
        to: to || "atfieldson@gmail.com", // list of receivers
        cc: '"Adam Fieldson" <atfieldson@gmail.com>',
        subject:
          subject ||
          "Seems like something isn't working quite right with Nodemailer", // Subject line
        text: html, // plain text body
        html: html
      };

      // send mail with defined transport object
      let info = await transporter.sendMail(mailOptions);

      console.log("Email sent: %s", info.messageId);
    } catch (error) {
      console.log(error);
    }
  },
  sendContactEmail: async (contactName, contactEmail, contactMessage) => {
    const html = `Message from ${contactName} (${contactEmail}).\n\n${contactMessage}`;
    try {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_PASSWORD
        }
      });

      let mailOptions = {
        from: '"Adam Fieldson" <atfieldson@gmail.com>', // sender address
        to: "atfieldson@gmail.com", // list of receivers
        cc: '"Adam Fieldson" <atfieldson@gmail.com>',
        subject: "Contact form submission",
        text: html, // plain text body
        html: html
      };

      // send mail with defined transport object
      let info = await transporter.sendMail(mailOptions);

      console.log("Email sent: %s", info.messageId);
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = nodemailerPeon;
