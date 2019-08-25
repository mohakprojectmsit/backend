require('dotenv').config();
const nodemailer = require('nodemailer');
const log = console.log;
const template = require('./emailtemplate');

const sendOurMail = (sendto, subject, message) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: `${sendto}`,
        subject: `${subject}`,
        text: `${message}`
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            log('Error occurs' + err);
        } else {
            log('SUCCESS');
        }
    });
}

exports.sendOurMail = sendOurMail;