import { useId, useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";

import { images } from "../../constants";
import { Settings } from "../../constants/defaultData";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name: fieldName, value } = e.target;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill out every field before sending.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Sending message…");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
      );
      toast.dismiss(toastId);
      toast.success("Message sent — I'll be in touch shortly.");
      setIsFormSubmitted(true);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Something went wrong. Please try again or email me directly.");
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="head-text">{Settings.contactHeading}</h2>

      <div className="app__contact-grid">
        <aside className="app__contact-aside">
          <p className="app__contact-intro p-text">
            Have a project, an idea, or just want to say hi? Drop me a line
            and I&rsquo;ll get back to you within a couple of working days.
          </p>

          <a
            href={`mailto:${Settings.email}`}
            className="app__contact-card"
            aria-label={`Send an email to ${Settings.email}`}
          >
            <img src={images.email} alt="" width="60" height="60" aria-hidden="true" />
            <div>
              <span className="app__contact-card-label">Email me</span>
              <span className="app__contact-card-value">{Settings.email}</span>
            </div>
          </a>

          <div className="app__contact-socials" aria-label="Social profiles">
            <a
              href={Settings.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <BsLinkedin aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a
              href={Settings.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile (opens in new tab)"
            >
              <FaGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>
        </aside>

        <div className="app__contact-panel">
          {!isFormSubmitted ? (
            <form className="app__contact-form" ref={form} onSubmit={handleSubmit} noValidate>
              <div className="app__contact-row">
                <div className="app__contact-field">
                  <label htmlFor={nameId} className="app__contact-label">
                    Your name
                  </label>
                  <input
                    id={nameId}
                    className="p-text"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={handleChangeInput}
                    required
                  />
                </div>
                <div className="app__contact-field">
                  <label htmlFor={emailId} className="app__contact-label">
                    Your email
                  </label>
                  <input
                    id={emailId}
                    className="p-text"
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    spellCheck={false}
                    placeholder="you@example.com"
                    value={email}
                    onChange={handleChangeInput}
                    required
                  />
                </div>
              </div>
              <div className="app__contact-field">
                <label htmlFor={messageId} className="app__contact-label">
                  Your message
                </label>
                <textarea
                  id={messageId}
                  className="p-text"
                  name="message"
                  placeholder="Tell me a little about your project…"
                  value={message}
                  onChange={handleChangeInput}
                  rows={6}
                  required
                />
              </div>
              <button type="submit" className="p-text" disabled={loading}>
                {loading ? "Sending…" : "Send message"}
                <HiArrowRight aria-hidden="true" />
              </button>
            </form>
          ) : (
            <div className="app__contact-thanks" role="status" aria-live="polite">
              <h3 className="head-text">Thank you for getting in touch!</h3>
              <p className="p-text">
                I&rsquo;ve received your message and will reply within a couple of working days.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const ContactContainer = AppWrap(MotionWrap(Contact, "app__contact"), "contact", "app__whitebg");
export default ContactContainer;
