import HeaderBar from "../components/header";
import { FiDownload } from "react-icons/fi";

import "../src/app/globals.css";
export default function Resume() {
  return (
    <div>
      <HeaderBar allLinksToHome={true} />
      <div className="flex flex-col justify-center">
        <h1 className="self-center text-blue-500 font-extrabold text-4xl mt-28">
          Resume
        </h1>
        <div className="bg-blue-400 self-center mt-4 rounded-lg p-3 px-8">
          <button className="flex flex-row items-center gap-2">
            <FiDownload />
            <span>View PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
