import HeaderBar from "../../components/header";
import HomePage from "../../components/home";
import AboutMe from "../../components/about";
import TechnicalSkills from "../../components/technicalskills";
import Footer from "../../components/footer";
import ContactForm from "../../components/contact";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBar />
      <HomePage />
      <AboutMe />
      <TechnicalSkills />
      <ContactForm />
      <Footer />
    </div>
  );
}
