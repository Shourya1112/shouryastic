import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "../styles/contact.css"

const Contact = () => {
  const [error, setError] = useState(null); // Track error state
  const [success, setSuccess] = useState(null); // Track success state

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3jza02f', 'template_rwac91p', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setError(null); // Clear the error
        setSuccess("Message delivered successfully!"); // Set the success message
      })
      .catch((error) => {
        console.log(error.text);
        setError("Message not sent — Please try again later!"); // Set the error message
        setSuccess(null); // Clear the success message
      });

    e.target.reset();
  };

  return (
    <div className="contact">
      <div className="contact-formPage">
        {error && (
          <div className="error">
            <strong>Error:</strong> {error}
          </div>
        )}
        {success && (
          <div className="success">
            <strong>Success:</strong> {success}
          </div>
        )}
        <form ref={form} onSubmit={sendEmail}>
          <div className="formEl">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              required
              className="text-input"
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
              className="text-input"
            />
            <input
              placeholder="Message"
              name="user_message"
              rows={5}
              required
              className="text-input"
            />
            <button type="submit" className="submit-button">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="contact-img">
        <img
          src="https://res.cloudinary.com/dkrinlbmx/image/upload/v1683273318/vecteezy_3d-business-mail-send-icon-or-3d-business-important-mail_10915785_381_1_yrlyzs.png"
          alt="message illustration"
          width="600px"
        />
      </div>
    </div>
  );
};

export default Contact;
