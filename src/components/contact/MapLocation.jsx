import React from "react";
import styles from "./MapLocation.module.css";

const OfficeLocation = () => {
    return (
        <section className={styles.officeSection}>
            {/* Map with padding */}
            <div className={styles.mapContainer}>
                <div className={styles.mapWrapper}>
                    <iframe
                        title="Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6305036927133!2d80.284204275079!3d13.122578287206897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f6f3137d605%3A0x1442a2b36487d972!2sJG%20HEART%20%26%20HAEMATOLOGY%20CENTRE!5e0!3m2!1sen!2sin!4v1758273093568!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Address Card */}
            <div className={styles.addressCard}>
                <h2>Our Clinic</h2>
                <p>
                    <strong>Address:</strong> No 595/628, Service road, fire station,<br /> Thiruvottiyur High Rd, opposite to Tondiarpet,<br /> Korukkupet, Washermanpet, Chennai, Tamil Nadu 600021
                </p>
                <p>
                    <strong>Phone:</strong> +91 96294 64529 <br />
                    <strong>Email:</strong> drjaswanthini@gmail.com
                </p>
            </div>
        </section>
    );
};

export default OfficeLocation;
