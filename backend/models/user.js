import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true }, // EMP001 etc.
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String },
    department: { type: String },
    designation: { type: String },
    level: { type: String }, // For internal role level
    userType: {
  type: String,
  enum: [
    "Admin",         // Super admin managing the whole platform
    "Employee",      // General company staff
    "HR",            // Human Resources team
    "Manager",       // Project/Team Managers
    "Marketing",     // Marketing team
    "Sales",         // Sales team
    "IT",            // Technical/IT staff
    "Finance",       // Accounting/Finance team
    "Customer",      // Registered customer/client using the services/products
    "Guest",         // Unregistered or limited access user
    "Pending",       // Awaiting approval
  ],
  default: "Pending",
},
activateDate: { type: Date },
deactivateDate: { type: Date },
    email: { type: String, unique: true, lowercase: true },
    phone: { type: String },
    mobile: { type: String },
    password: { type: String, required: true },

    gender: { type: String, enum: ["Male", "Female", "Other"] },
    age: { type: Number },
    maritalStatus: { type: String },
    qualification: { type: String },
    bloodGroup: { type: String },
    nationality: { type: String },
    specialization: { type: String },
    dateOfBirth: { type: Date },
    dateOfJoining: { type: Date },
    dateOfLeave: { type: Date, default: null },
    panNumber: { type: String },

    // Address fields
    currentAddress: {
      street: String,
      city: String,
      state: String,
      country: String,
      pin: String,
    },
    permanentAddress: {
      street: String,
      city: String,
      state: String,
      country: String,
      pin: String,
    },

    // Auth/Status
    isActive: { type: Boolean, default: false },
    resetToken: { type: String, default: null },
    resetTokenExpiry: { type: Date, default: null },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
