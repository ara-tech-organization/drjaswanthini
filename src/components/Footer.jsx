import React from "react";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
  YoutubeFilled,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <h2>Dr. A. R. Jaswanthini</h2>
          <p className={styles.tagline}>MD, DrNB (Clinical Hematology)</p>
          <p className={styles.desc}>Assistant Professor of Hematology</p>
          <p className={styles.desc}>
            Institute of Child Health & Hospital for Children, MMC, Chennai
          </p>
        </div>

        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Book an Appointment</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h3>Contact</h3>
          <p>
            <EnvironmentOutlined /> No 595/628, Service road, fire station,<br /> Thiruvottiyur High Rd, opposite to Tondiarpet,<br /> Korukkupet, Washermanpet, Chennai, Tamil Nadu 600021
          </p>
          <p>
            <PhoneOutlined /> +91 96294 64529
          </p>
          <p>
            <MailOutlined />{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=drjaswanthini@gmail.com&su=Appointment%20Request&body=Hi%20Dr.%20Jaswanthini,"
              target="_blank"
              rel="noopener noreferrer"
            >
              drjaswanthini@gmail.com
            </a>
          </p>

          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/people/Dr-A-R-Jaswanthini/61576805139698/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookFilled />
            </a>
            <a
              href="https://www.instagram.com/dr.a.r.jaswanthini/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramFilled />
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
    <TwitterSquareFilled />
  </a> */}
            <a
              href="https://www.youtube.com/@DrJaswanthini"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeFilled />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
