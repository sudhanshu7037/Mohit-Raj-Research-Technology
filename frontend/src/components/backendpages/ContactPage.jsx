import { useState, useEffect } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/contacts", {
        withCredentials: true,
      });
      const data = response?.data;
      setContacts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">📩 Contact Messages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, i) => (
          <ContactCard contact={contact} key={contact._id} />
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
