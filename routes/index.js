var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var xoauth2 = require('xoauth2');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/sendEmail", (req, res) => {
    const output = `<p>Name: ${req.body.name}</p><p>Subject: ${req.body.subject}</p>`;
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: 'OAuth2',
            user: "im.amir107@gmail.com",
            clientId: '794334359277-k2e4j0lg9d0pk43e76qj6ubkra0pvmrv.apps.googleusercontent.com',
            clientSecret: 'ki4rlkGvSzhNa28iYWNZ15Bt',
            refreshToken: '1/Kfp1gn_Pn0RHTCdLom9T63ThbzK_RTZjBjSqYiEBOonMMhWH5aVmbil7QLXt2Pmw'
        },
        // tls: {
        //   rejectUnauthorized: false
        // }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'Portfolio <req.body.email>', // sender address
        to: ["mamir.bese16seecs@seecs.edu.pk", "mzohaib.bese16seecs@seecs.edu.pk"], // list of receivers
        subject: "Portfolio Contact", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        res.redirect("/");
    });
});

module.exports = router;
