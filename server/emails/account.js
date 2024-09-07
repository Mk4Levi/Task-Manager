/*
	STEPS TO BE FOLLOWED
	* create a send grid account
	* go to web api
	* generate API key and follow all other steps
	* run your node app.

	*** To be updated
*/

const sgMail = require("@sendgrid/mail");

const sendGridAPIKey = process.env.sendGridAPIKey;

sgMail.setApiKey(sendGridAPIKey);

sgMail.send({
  to: process.env.emailTo,
  from: process.env.emailFrom,
  subject: process.env.emailTitle,
  text: process.env.emailText,
});
