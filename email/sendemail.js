const nodemailer = require('nodemailer');
const log = console.log;

const sendOurMail = (sendto, subject, message, res) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'delhimohallasabha@gmail.com',
            pass: 'msdelhi123'
        }
    });

    let mailOptions = {
        from: 'delhimohallasabha@gmail.com',
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