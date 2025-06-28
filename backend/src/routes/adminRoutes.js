const express = require("express");
const JobPost = require("../models/jobpost");
const Contact = require("../models/contact.js");


const router = express.Router();

router.post("/jobs",  async (req, res) => {
  try {
    const job = new JobPost(req.body);
    await job.save();
    res.status(201).json({ message: "Job post created successfully", job });
  } catch (error) {
    console.error("Error creating job post:", error);
    res.status(400).json({ message: error.message });
  }
});


router.put("/jobs/:id",  async (req, res) => {
  try {
    const job = await JobPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job post updated", job });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/jobs/:id",  async (req, res) => {
  try {
    const job = await JobPost.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job post deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
