const newProject = require("../model/user");
const fs = require("fs");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_APP_PASS,
  },
});

async function PostProjectByclient(req, res) {
  const body = req.body;

  if (
    !body ||
    !body._name ||
    !body._email ||
    !body._contact ||
    !body._subject ||
    !body._message
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const result = await newProject.create({
      name: body._name,
      email: body._email,
      contact: body._contact,
      subject: body._subject,
      message: body._message,
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `🆕 New Project Received: ${result.subject}`,
      html: `
        <h2>New Project Submission</h2>
        <table border="1" cellpadding="8" style="border-collapse:collapse;">
          <tr><td><b>Name</b></td><td>${result.name}</td></tr>
          <tr><td><b>Email</b></td><td>${result.email}</td></tr>
          <tr><td><b>Contact</b></td><td>${result.contact}</td></tr>
          <tr><td><b>Subject</b></td><td>${result.subject}</td></tr>
          <tr><td><b>Message</b></td><td>${result.message}</td></tr>
          <tr><td><b>Date</b></td><td>${new Date().toLocaleString()}</td></tr>
        </table>
      `,
    };

    fs.appendFile("Projects.txt", `\n${JSON.stringify(result)}`, (err) => {
      if (err) {
        return res.status(500).json({ msg: "Failed to write project to file" });
      }

      transporter.sendMail(mailOptions, (mailErr) => {
        if (mailErr) {
          console.error("Email error:", mailErr.message, mailErr.response);
        } else {
          console.log("Notification email sent!", info.response);
        }
      });

      return res
        .status(201)
        .json({ msg: "Project submitted. We'll call you as soon as possible" });
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ msg: "Internal server error" });
  }
}

module.exports = { PostProjectByclient };
