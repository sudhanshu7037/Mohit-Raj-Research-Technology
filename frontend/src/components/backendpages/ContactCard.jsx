import React from "react";

const ContactCard = ({ contact }) => {
  const {
    firstname,
    lastname,
    email,
    company,
    phone,
    country,
    address,
    serviceType,
    message,
    createdAt,
  } = contact;

  const formattedDate = new Date(createdAt).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-3xl border hover:shadow-xl transition duration-300">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-gray-800">
          {firstname} {lastname}
        </h2>
        <span className="text-sm text-gray-500">{formattedDate}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
        <div><strong>Email:</strong> {email}</div>
        <div><strong>Phone:</strong> {phone}</div>
        <div><strong>Service Type:</strong> {serviceType}</div>
        <div><strong>Company:</strong> {company || "N/A"}</div>
        {country && <div><strong>Country:</strong> {country}</div>}
        {address && <div><strong>Address:</strong> {address}</div>}
      </div>

      <div className="mt-4">
        <strong className="text-gray-800">Message:</strong>
        <p className="text-gray-600 mt-1 bg-gray-100 p-3 rounded-md">{message}</p>
      </div>
    </div>
  );
};

export default ContactCard;
