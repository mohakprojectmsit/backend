const nodemailer = require('nodemailer');
const log = console.log;
const sendmail = async (sendto, subject, message) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'anita1@ethereal.email',
            pass: 'mrUd748q2UmxXnRfyQ'
        }
    });
    let mailOptions = {
        from: 'anita1@ethereal.email',
        to: `${sendto}`,
        subject: `${subject}`,
        text: `${message}`
    };
    let result = await transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            log('Error occurs' + err);
            return err;
        } else {
            log(data);
            return data;
        }
    });
    return result;
}
exports.sendmail = sendmail;