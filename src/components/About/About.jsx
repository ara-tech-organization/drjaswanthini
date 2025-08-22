import React from 'react';
import styles from './about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div data-aos="fade-up"
      data-aos-duration="1500" className={styles.aboutSection}>
      <div className={styles.imageContainer}>
        <img src="/assets/images/illustration.jpg" alt="Hematologist and medical team" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2>Specialized Hematology Consultations <br />in Chennai & Online</h2>
        <p>
          I offer dedicated hematology care for individuals across Chennai and throughout India via teleconsultation.
          Whether you’re dealing with anemia, clotting disorders, or more complex blood-related conditions, I provide
          thorough assessments, second opinions, and personalized management plans — all backed by my expertise in hematology.
        </p>
        <ul className={styles.featuresList}>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <div>
              <strong>Comprehensive Blood Disorder Care</strong>
              <p>I evaluate and treat anemia, thalassemia, bleeding and clotting disorders, and hematologic malignancies.</p>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <div>
              <strong>Accessible Teleconsultations</strong>
              <p>Connect with me from anywhere — no travel, no hassle. Ideal for follow-ups and remote patients.</p>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <div>
              <strong>Patient-Focused Care</strong>
              <p>I take a personalized approach to every consultation, ensuring clarity, compassion, and clinical accuracy every step of the way.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
