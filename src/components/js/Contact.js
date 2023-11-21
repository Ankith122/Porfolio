import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';
import loadingGif from '../images/loadingGif.gif';

export const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Display the loader

    emailjs
      .sendForm('service_bdcp33m', 'template_54ik91c', form.current, '8LT9kOqhL4FHF_CXF')
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully!!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Error sending email. Please try again later!!');
        }
      )
      .finally(() => {
        setIsLoading(false); // Hide the loader after sending/email failure
      });
  };

  return (
    <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="your_message" />
        <input type="submit" value="Send" />
      </form>
      {isLoading && <img src={loadingGif} alt="Loading..." className="loading-gif" />}
    </div>
  );
};

export default Contact;