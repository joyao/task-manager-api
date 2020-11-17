const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "hsujoyao@gmail.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how u get along with the app.`,
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "hsujoyao@gmail.com",
        subject: "Goodbye from task app!",
        text: `Goodbye ${name}. I hope to see u back sometime soon.`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail,
};
