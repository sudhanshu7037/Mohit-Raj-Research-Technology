const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
   
    location: {
      type: String,
      required: true,
    },
    employmentType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Internship"],
      required: true,
    },
    salaryRange: {
      type: String, // e.g., "50,000 - 70,000"
      required: true,
    },
    requirements: {
      type: [String], // Array of strings for job requirements
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const JobPost = mongoose.model("JobPost", jobPostSchema); 
module.exports = JobPost;