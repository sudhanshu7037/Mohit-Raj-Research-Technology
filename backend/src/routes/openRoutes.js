const express = require("express");
const JobPost = require("../models/jobpost");
const Contact = require("../models/contact.js");
const nodemailer = require("nodemailer");

const router = express.Router();

router.get("/jobs", async (req, res) => {
  try {
    const jobs = await JobPost.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/jobs/:id", async (req, res) => {
  try {
    const job = await JobPost.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
});

router.post("/contact", async (req, res) => {
  try {
    const { firstname, lastname, email, company, phone, country, address, serviceType, message } = req.body;

    // 1️⃣ Save to MongoDB
    const newContact = new Contact({
      firstname,
      lastname,
      email,
      company,
      phone,
      country,
      address,
      serviceType,
      message,
    });
    await newContact.save();

    // 2️⃣ Send Email to Admin
    const transporter = nodemailer.createTransport({
      service: "gmail", // OR use your SMTP config (e.g., Mailgun, SendGrid)
      auth: {
        user: process.env.ADMIN_EMAIL,       // ✅ your admin email
        pass: process.env.ADMIN_EMAIL_PASS,  // ✅ app password (not Gmail login password!)
      },
    });

    const mailOptions = {
      from: `"Website Contact" <${email}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Received</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // ✅ All good
    res.status(200).json({ message: "Contact form submitted & email sent successfully" });
  } catch (error) {
    console.error("Error during contact submission:", error);
    res.status(400).json({ message: error.message });
  }
});
