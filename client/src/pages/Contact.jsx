import youtube from "../assets/youtube.png"; // Adjust the path based on your structure
import ig from "../assets/instagram.png"; // Adjust the path based on your structure
import twitter from "../assets/twitter.png"; // Adjust the path based on your structure
import soundcloud from "../assets/soundcloud.png";
import ContactForm from "../components/ContactForm";
// import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="">
        <ContactForm />
      </section>
      <section>{/* Place where all URLs/Social media acc are shown */}</section>
    </div>
  );
};

export default Contact;
