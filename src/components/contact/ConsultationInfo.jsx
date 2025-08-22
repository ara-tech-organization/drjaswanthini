import React, { useState } from "react";
import styles from "./ConsultationInfo.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending data:", formData);

    try {
      const response = await fetch(
        "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/ClinicForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 123",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!data.error) {
        alert("✅ " + data.message);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          date: "",
          time: "",
          message: "",
        });
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.leftContent} data-aos="fade-up">
        <h2>In-Person Consultations</h2>
        {/* <p>Available at select private hospitals in Chennai:</p> */}
        <ul>
          <li>JG Heart and Haematology Centre</li>

        </ul>

        <h2>Teleconsultations (Pan-India)</h2>
        <p>
          After a convenient time is confirmed, payment can be made through:
        </p>
        <ul>
          <li>
            Google Pay / PhonePe / UPI: <strong>+91 96294 64529</strong>
          </li>
          <li>
            UPI ID: <strong>dr.jaswanthini@oksbi</strong>
          </li>
        </ul>

        <h2>For Referring Doctors</h2>
        <ul>
          <li>
            Consultants and physicians can refer patients by sharing a brief
            summary and investigations via WhatsApp.
          </li>
          <li>
            Prompt feedback, follow-up, and collaborative care will be provided.
          </li>
        </ul>
      </div>

      <div className={styles.rightForm} data-aos="fade-down">
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Your Email*</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label htmlFor="mobile">Your Mobile Number*</label>
              <input
                type="tel"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="date">Choose Date*</label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value);
                  if (selectedDate.getDay() === 0) {
                    alert("Sundays are not available for appointments.");
                    return;
                  }
                  handleChange(e);
                }}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="time">Choose Time Slot*</label>
              <select
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select Time Slot</option>
                <option value="16:00-16:30">4:00 PM - 4:30 PM</option>
                <option value="16:30-17:00">4:30 PM - 5:00 PM</option>
                <option value="17:00-17:30">5:00 PM - 5:30 PM</option>
                <option value="17:30-18:00">5:30 PM - 6:00 PM</option>
                <option value="18:00-18:30">6:00 PM - 6:30 PM</option>
                <option value="18:30-19:00">6:30 PM - 7:00 PM</option>
                <option value="19:00-19:30">7:00 PM - 7:30 PM</option>
                <option value="19:30-20:00">7:30 PM - 8:00 PM</option>
                <option value="20:00-20:30">8:00 PM - 8:30 PM</option>
                <option value="20:30-21:00">8:30 PM - 9:00 PM</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit">Book an Appointment</button>
        </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </section>
  );
};

export default ContactSection;
