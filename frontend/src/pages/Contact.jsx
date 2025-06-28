import React, { useState } from "react";
import axios from "axios";
import { getNames } from "country-list";

const countries = getNames();

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    serviceType: "",
    customService: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      serviceType:
        formData.serviceType === "Others"
          ? formData.customService
          : formData.serviceType,
    };

    try {
      await axios.post("http://localhost:4000/contact", finalData);
      alert("Contact submitted successfully!");

      // Reset form
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        company: "",
        phone: "",
        country: "",
        serviceType: "",
        customService: "",
        message: "",
      });
    } catch (error) {
      alert("Error submitting form. Try again.");
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <img
          src="https://advisorhtml.websitelayout.net/img/banner/page-title.jpg"
          alt=""
          className="h-64 w-full"
        />
      </div>

      <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full max-w-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            />

            {/* Country Dropdown */}
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            >
              <option value="">Select Country</option>
              {countries.map((country, idx) => (
                <option key={idx} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {/* Address Field */}
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded col-span-2"
              required
            />

            {/* Service Type Dropdown */}
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            >
              <option value="">Select Service Type</option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
              <option value="Consulting">Consulting</option>
              <option value="Others">Others</option>
            </select>

            {/* If "Others" is selected */}
            {formData.serviceType === "Others" && (
              <input
                type="text"
                name="customService"
                value={formData.customService}
                onChange={handleChange}
                placeholder="Please specify your service"
                className="mt-2 border border-gray-300 p-2 rounded w-full col-span-2"
                required
              />
            )}
          </div>

          <textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded mt-4 w-full"
            rows="5"
            required
          />

          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
