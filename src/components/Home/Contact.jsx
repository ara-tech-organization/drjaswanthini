import React from "react";
import styles from "./Contact.module.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className={styles.contactContainer}
    >
      <div className={styles.contactLeft}>
        <h1>
          Let’s get
          <br />
          in touch
        </h1>
        <p className={styles.subheading}>
          Don’t be afraid to say hello with us!
        </p>

        <div className={styles.contactInfo}>
          <div className={styles.infoBlock}>
            <FiPhone className={styles.icon} />
            <div>
              <p className={styles.label}>Phone</p>
              <p className={styles.info}>+91 96294 64529</p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <FiMail className={styles.icon} />
            <div>
              <p className={styles.label}>Email</p>
              <p className={styles.info}>drjaswanthini@gmail.com</p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <FiMapPin className={styles.icon} />
            <div>
              <p className={styles.label}>Office</p>
              <p className={styles.info}>
                No 595/628, Service road, fire station, Thiruvottiyur High Rd, opposite to Tondiarpet, Korukkupet, Washermanpet, Chennai, Tamil Nadu 600021
              </p>
            </div>
          </div>

          {/* <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            See on Google Map ↗
          </a> */}
        </div>
      </div>

      <div className={styles.contactRight}>
        <div className={styles.arrowText}>
          <p>
            Great! We're excited to hear from you and let’s start something
            special together.
            <br />
            Call us for any inquiry.
          </p>
        </div>

        <div className={styles.mapEmbed}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6305036927133!2d80.284204275079!3d13.122578287206897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f6f3137d605%3A0x1442a2b36487d972!2sJG%20HEART%20%26%20HAEMATOLOGY%20CENTRE!5e0!3m2!1sen!2sin!4v1758273093568!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
