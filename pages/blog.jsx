import HeaderBar from "../components/header";
import { FiDownload } from "react-icons/fi";
import Footer from "../components/footer";

import "../src/app/globals.css";
export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBar allLinksToHome={true} />
      <main className="flex-grow"></main>
      <Footer />
    </div>
  );
}
