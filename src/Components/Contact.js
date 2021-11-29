import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { FaHome, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  });
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ihclb29",
        "template_w0v9e0h",
        e.target,
        "user_qJU2GetQ0lhDHs9Qh7gK7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section
      id="Contact"
      data-aos="fade-up"
      className="bg-primary-second rounded-2xl mt-20 dark:bg-primary-dark-contact"
    >
      <div className="grid grid-cols-2 justify-content items-center p-2 md:p-6">
        <div className="flex flex-col gap-y-5 text-primary-third font-bold text-sm md:text-xl">
          <h1>Get in touch</h1>
          <p>
            Feel free to reach out to me.
            <br />
            If you have a project in mind, want to meet or
            <br /> maybe just say hello.
          </p>
          <ul className="flex flex-col gap-y-2 text-xs md:text-xl">
            <li className="flex flex-row gap-x-2  items-center">
              <FaHome className="text-primary-third" />
              Warsaw,Poland
            </li>
            <li className="flex flex-row gap-x-2  items-center">
              <FaPhoneAlt className="text-primary-third" />
              +48 (780) 612 852
            </li>
            <li className="flex flex-row gap-x-2  items-center">
              <FaRegEnvelope className="text-primary-third" />
              mehmethanifiisik@yahoo.com
            </li>
          </ul>
        </div>
        <form onSubmit={sendEmail} className="flex flex-col gap-y-5 ">
          <input
            className="bg-transparent border-primary-third  placeholder-primary-third p-1  font-bold text-sm md:text-xl border-2 text-primary-third rounded  focus:outline-none"
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <input
            className="bg-transparent border-primary-third   placeholder-primary-third p-1 font-bold text-sm md:text-xl border-2   text-primary-third rounded  focus:outline-none"
            type="email"
            placeholder="Email"
            name="user_email"
            required
          />
          <textarea
            className="bg-transparent border-primary-third  placeholder-primary-third p-1 font-bold text-sm md:text-xl border-2 text-primary-third rounded  focus:outline-none"
            placeholder="Your Message"
            name="user_message"
            rows="6"
            cols="50"
            required
          ></textarea>
          <input
            className="bg-primary-third text-primary-second border-primary-third border text-contact-color font-bold text-sm md:text-xl cursor-pointer "
            type="submit"
            name="submit"
            value="SUBMIT"
            id="submit"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
