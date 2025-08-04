import React, { useState } from "react";
import axios from "axios";
import youtube from "../assets/youtube.png"; // Adjust the path based on your structure
import ig from "../assets/instagram.png"; // Adjust the path based on your structure
import twitter from "../assets/twitter.png"; // Adjust the path based on your structure
import soundcloud from "../assets/soundcloud.png";
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
    <div className="">
      
    </div>
  );
};

export default Contact;
