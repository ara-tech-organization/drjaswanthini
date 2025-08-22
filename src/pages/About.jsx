import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/Header";
import About from "../components/About/About";
import AboutHero from "../components/About/AboutHero";
import Experience from "../components/About/Experience";
import AboutSummary from "../components/About/AboutSummary";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const AboutPage = () => {
  return (
    <>
      <HelmetProvider>
      <Helmet>
        <title>About Dr. Jaswanthini | Expert Hematologist in Chennai</title>
        <meta
          name="description"
          content="Learn about Dr. Jaswanthini, a leading hematologist in Chennai, with years of experience in advanced blood disorder treatments."
        />
        <meta
          name="keywords"
          content="Hematologist Chennai, Dr. Jaswanthini, Blood Disorder Specialist, Best Hematology Doctor"
        />
        <meta property="og:title" content="About Dr. Jaswanthini | Hematologist in Chennai" />
        <meta
          property="og:description"
          content="Discover Dr. Jaswanthini's expertise in hematology, providing personalized care for patients with blood disorders."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drjaswanthini.com/about" />
        <meta property="og:image" content="https://drjaswanthini.com/assets/about-og-image.jpg" />
      </Helmet>

      <Header />
      <AboutHero />
      <About />
      <Experience />
      <AboutSummary />
      <Footer />
      <Copyright />
        </HelmetProvider>
    </>
  );
};

export default AboutPage;
