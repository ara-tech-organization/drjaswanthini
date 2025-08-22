import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Copyrights from '../components/Copyright';
import BookAppointment from '../components/contact/BookAppointment';
import ContactCards from '../components/contact/ContactCards';
import ConsultationInfo from '../components/contact/ConsultationInfo';
import Appointment from '../components/services/Appointment';

const Contact = () => {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Contact Dr. Jaswanthini | Hematologist in Chennai | Book Appointment</title>
        <meta
          name="description"
          content="Get in touch with Dr. Jaswanthini, expert hematologist in Chennai. Book your appointment today for personalized blood disorder treatments and consultations."
        />
        <meta
          name="keywords"
          content="Contact Hematologist Chennai, Dr. Jaswanthini Contact, Book Hematology Appointment, Blood Specialist Chennai"
        />
        <meta property="og:title" content="Contact Dr. Jaswanthini | Hematologist in Chennai" />
        <meta
          property="og:description"
          content="Connect with Dr. Jaswanthini, Chennai's leading hematologist. Schedule consultations for anemia, clotting issues, and blood disorders."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drjaswanthini.com/contact" />
        <meta property="og:image" content="https://drjaswanthini.com/assets/contact-og-image.jpg" />
      </Helmet>

      <Header />
      <BookAppointment />
      <ContactCards />
      <Appointment />
      <ConsultationInfo />
      <Footer />
      <Copyrights />
      </HelmetProvider>
    </>
  );
};

export default Contact;
