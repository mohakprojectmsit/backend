require('dotenv').config();
const nodemailer = require('nodemailer');
const log = console.log;

const sendOurMail = (sendto, subject, message, res) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: 'mohakprojectmsit@gmail.com',
        to: `${sendto}`,
        subject: `${subject}`,
        text: `${message}`
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            log('Error occurs' + err);
            res.send('ERROR');
        } else {
            log('SUCCESS');
            res.send('SUCCESS');
        }
    });
}
exports.sendOurMail = sendOurMail;