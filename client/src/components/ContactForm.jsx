import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = async (e) => {
    e.persist();
    e.preventDefault();

    try {
      setStatus("Sending");
      const emailJsResponse = await emailjs.send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          user_name: name,
          user_email: email,
          message: message,
          //   subject: subject, include later once email JS is understood
        }
      );
      console.log(
        `EmailJS results are ${emailJsResponse.status + "" + emailJsResponse.text}`
      );
      setStatus("Sent");
      setEmail("");
      setName("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };
  return (
    <>
      <section className="marginEven  Screen-sizing-3 grid grid-3 gap-20 ContactForm ">
        <div className="span-1">
          <img src="/assets/Images/mic.png" alt="Microphone in a theatre" />
        </div>
        <form className="span-2 padding-10" onSubmit={sendEmail}>
          <div>
            <h2>Get in touch</h2>
            <h3>Contact the team of Saloni Singh for business inquires.</h3>
          </div>
          <div>
            <label></label>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label></label>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div>
            <label></label>
            <input
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label></label>
            <input
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
            />
          </div>
          <button href="#" className="button">
            <span className="button__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="black"
                ></path>
              </svg>

              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg button__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="black"
                ></path>
              </svg>
            </span>
            Send Message
          </button>

          {status == "sent" && (
            <p style={{ color: "green" }}>
              Success, you will be contacted soon
            </p>
          )}
          {status == "error" && (
            <p style={{ color: "red" }}>Error, try again</p>
          )}
        </form>
      </section>
    </>
  );
};

export default ContactForm;
