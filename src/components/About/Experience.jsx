import React from "react";
import styles from "./Experience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      className={styles.experienceSection}
    >
      <h2 className={styles.heading}>I Aim to Provide the Best Experience</h2>
      <p className={styles.subheading}>
        Dedicated to redefining hematology care in Chennai, I specialize in providing expert online consultations for blood-related conditions — from diagnosis to long-term management. My mission is to make hematology support more accessible, compassionate, and personalized to your unique journey.
      </p>

      <div className={styles.servicesContainer}>
        <div className={styles.serviceCard}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
          <h3>Specialized Blood Care, Simplified</h3>
          <p>
            I understand the complexity of blood-related conditions. My virtual consultations make expert hematology support accessible anytime, anywhere.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
          <h3>Holistic Health Approach</h3>
          <p>
            Beyond symptoms, I focus on your holistic well-being. My services encompass physical, mental, and emotional health.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
          <h3>Patient Education Empowerment</h3>
          <p>
            I believe in empowering you with knowledge so you're an active participant in your health journey and can make informed decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
