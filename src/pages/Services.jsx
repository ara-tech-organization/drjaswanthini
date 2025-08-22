import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import ServiceSection1 from '../components/services/ServiceSection1';
import ServiceSection2 from '../components/services/ServiceSection2';
import Appointment from '../components/services/Appointment';
import ServiceHoursSection from '../components/services/ServiceHourSection';

const Service = () => {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Best Hematology Services in Chennai | Dr. Jaswanthini</title>
        <meta
          name="description"
          content="Explore advanced hematology services offered by Dr. Jaswanthini in Chennai. Personalized treatment plans for blood disorders, anemia, clotting issues, and more."
        />
        <meta
          name="keywords"
          content="Hematology Services Chennai, Blood Disorder Treatment, A  nemia Specialist, Hematologist Chennai, Dr. Jaswanthini"
        />
        <meta property="og:title" content="Best Hematology Services in Chennai | Dr. Jaswanthini" />
        <meta
          property="og:description"
          content="Discover expert hematology care in Chennai with Dr. Jaswanthini. Comprehensive diagnostics and advanced treatments for all blood-related conditions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drjaswanthini.com/services" />
        <meta property="og:image" content="https://drjaswanthini.com/assets/services-og-image.jpg" />
      </Helmet>

      <Header />
      <ServiceSection1 />
      <ServiceSection2 />
      <Appointment />
      <ServiceHoursSection />
      <Footer />
      <Copyright />
 </HelmetProvider>
    </>
  );
};

export default Service;
