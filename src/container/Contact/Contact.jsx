import { useState, useRef } from "react";
import toast from "react-hot-toast";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.name === "" || formData.email === "" || formData.message === "") {
      toast.error("Please fill all fields");
      return;
    }

    if (loading) {
      toast.error("Please wait...");
      return;
    }

    setLoading(true);

    // Send email
    emailjs.sendForm(
      import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
    );

    // Set a timer of 2 seconds to show the loading animation
    const toastId = toast.loading("Sending email...");
    setTimeout(() => {
      setLoading(false);
      setIsFormSubmitted(true);
      toast.dismiss(toastId);
      toast.success("Email sent successfully");
    }, 2000);
  };

  return (
    <>
      <h2 className="head-text">
        Take a coffee & <span>chat</span> with me
      </h2>

      <div className="app__contact-cards">
        <div className="app__contact-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:angelsanchezsierra98@gmail.com" className="p-text">
            angelsanchezsierra98@gmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+34 686 60 34 21" className="p-text">
            +34 686 60 34 21
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className="app__contact-form app__flex" ref={form}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit} disabled={loading}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

const ContactContainer = AppWrap(MotionWrap(Contact, "app__contact"), "contact", "app__whitebg");
export default ContactContainer;
