import React, { useState } from "react";
import axios from "axios";
// import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/contact`, form)
      .then(() => {
        setSubmitted(true);
      });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      {submitted ? (
        <p>Thank you for reaching out! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
