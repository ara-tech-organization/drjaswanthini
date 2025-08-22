// src/components/Copyright.jsx
import React from "react";
import styles from "./Footer.module.css";

const Copyright = () => {
  return (
    <section className={styles.copyrightSection}>
      <p>
        <a
          href="https://discovertechnologies.co/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          &copy; {new Date().getFullYear()}{" "} drjaswanthini. All rights reserved. Website created by ARA Discover Technologies - A unit of ARA Discoveries Pvt. Ltd.
        </a>
      </p>
    </section>
  );
};

export default Copyright;
