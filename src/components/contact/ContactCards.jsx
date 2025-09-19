// src/components/ContactCards.jsx
import React from "react";
import styles from "./ContactCards.module.css";

const ContactCards = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.card}>
        <h3>
          <i class="fa-brands fa-whatsapp"></i> WhatsApp
        </h3>
        <p>
          <a
            href="https://wa.me/919629464529"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click to Message – +91 96294 64529
          </a>
        </p>
      </div>

      <div className={styles.card}>
        <h3>
          <i className="fa-solid fa-phone-volume"></i> Phone
        </h3>
        <p>
          <a
            href="tel:+919629464529"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            +91 96294 64529
          </a>
        </p>
      </div>

      <div className={styles.card}>
        <h3>
          <i class="fa-solid fa-envelope"></i> Email
        </h3>
        <p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=drjaswanthini@gmail.com&su=Appointment%20Request&body=Hi%20Dr.%20Jaswanthini,"
            target="_blank"
            rel="noopener noreferrer"
          >
            drjaswanthini@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactCards;
