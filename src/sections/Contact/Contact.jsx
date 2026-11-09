import "./Contactcss.css";
import { useRef, useState, useEffect} from "react";
import emailjs from "@emailjs/browser";
import { SendLoading } from "../../components/SendLoading/SendLoading";
import { MessageStatus } from "../../components/MessageStatus/MessageStatus";
import {
  FiUser,
  FiMail,
  FiMapPin,
  FiClock,
  FiBriefcase,
  FiZap,
  FiEdit3,
  FiSend,
  FiCode,
  FiPhone,
} from "react-icons/fi";

import { RiSparkling2Line } from "react-icons/ri";

export const Contact = () => {
  const contactInfo = [
    { item: "Email", info: "Seronmarklaurence@gmail.com", icon: <FiMail /> },
    { item: "Contact Number", info: "09158793025", icon: <FiPhone /> },
    {
      item: "Response Time",
      info: "Usually within 24 hours",
      icon: <FiClock />,
    },
  ];

  const formRef = useRef();

  // State management for visual feedback
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    text: "",
    isError: false,
  });

  useEffect(() => {
  if (!statusMessage.text) return;

  let timer;

  if (statusMessage.isError) {

    timer = setTimeout(() => {
      setStatusMessage({ text: "", isError: false });
    }, 8000); // 6–8s
  } else {

    timer = setTimeout(() => {
      setStatusMessage({ text: "", isError: false });
    }, 3000);
  }

  return () => clearTimeout(timer);
}, [statusMessage]);

  // Environment Variable assignment (Using Vite syntax here)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage({ text: "", isError: false });

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setIsSending(false);
        setStatusMessage({
          text: "Message sent successfully!",
          isError: false,
        });
        formRef.current.reset(); // Clears out the input fields perfectly
      },
      (error) => {
        setIsSending(false);
        setStatusMessage({
          text: "Something went wrong. Please try again later.",
          isError: true,
        });
        console.error("EmailJS Error details:", error.text);
      },
    );
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-section">
        <div className="contact-a">
          <p className="lets-connect">
            <RiSparkling2Line />
            <span>LET'S CONNECT</span>
          </p>
          <h1>
            Get In <span className="touch">Touch</span>
          </h1>
          <p className="contact-subtitle">
            Have a project in mind or want to talk tech? Drop a message!
          </p>
          <hr />
          <div className="contact-info-list">
            {contactInfo.map((card, index) => {
              const uniqueKey = `${index}-${card.item}`;

              return (
                <div key={uniqueKey} className="contact-info-card">
                  <div className="info-icon-wrapper" aria-hidden="true">
                    {card.icon}
                  </div>

                  <div className="info-text-block">
                    <h4 className="info-label">{card.item}</h4>
                    <p className="info-detail">{card.info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="contact-b">
          <form
            ref={formRef}
            onSubmit={handleSendEmail}
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="user_name">
                <FiUser />
                <span>Name</span>
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder=" "
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">
                <FiMail />
                <span> Email Address</span>
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder=" "
                required
              />
            </div>

            <div className="form-group-message">
              <label htmlFor="message">
                <FiEdit3 />
                <span>Your Message</span>
              </label>
              <textarea
                id="user_message"
                name="user_message" // 
                rows="5"
                required
                placeholder=" "
              />
            </div>

            <button type="submit" disabled={isSending} className="submit-btn">
              {isSending ? (
                <SendLoading />
              ) : (
                <>
                  <FiSend />
                  <span> Send Message</span>
                </>
              )}
            </button>

            {/* Status Message Alerts */}
            {statusMessage.text && (
              <MessageStatus message={statusMessage.text} classN={`${statusMessage.isError ? "error-text" : "success-text"}`}/>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
