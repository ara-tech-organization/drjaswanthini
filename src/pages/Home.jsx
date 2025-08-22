import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Service";
import Contact from "../components/Home/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Appointment from "../components/Home/Appointment";
import FAQCarousel from "../components/Home/Faq";

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
  <title>Best Hospital for Hematology in Chennai | Dr. Jaswanthini</title>
  <meta
    name="description"
    content="Dr. Jaswanthini – Leading hematologist in Chennai, offering advanced blood disease diagnosis and treatment. Best hospital for hematology care in Chennai."
  />
  <meta name="keywords" content="hematology hospital Chennai, best hematologist Chennai, blood disorder treatment Chennai" />
  {/* <!-- OG tags for sharing --> */}
  <meta property="og:title" content="Best Hospital for Hematology in Chennai – Dr. Jaswanthini" />
  <meta property="og:description" content="Trust Dr. Jaswanthini for expert hematology treatments — leukemia, anemia, clotting disorders, and more." />
  <meta property="og:url" content="https://drjaswanthini.com/" />
  <meta property="og:image" content="https://drjaswanthini.com/og-dr_jaswanithini.jpg" />
  <link rel="canonical" href="https://drjaswanthini.com/" />
</Helmet>


      <Header />
      <Hero />
      <About />
      <Services />
      <Appointment />
      <FAQCarousel />
      <Contact />
      <Footer />
      <Copyright />
    </HelmetProvider>
  );
};

export default Home;
