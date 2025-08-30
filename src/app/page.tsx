import React from "react";
import HeaderBar from "../../components/header";
import HomePage from "../../components/home";
import AboutMe from "../../components/about";
import Footer from "../../components/footer";
import ContactForm from "../../components/contact";

export default function Home(): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBar />
      <main id="main-content" role="main" tabIndex={-1}>
        <HomePage />
        <AboutMe />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
