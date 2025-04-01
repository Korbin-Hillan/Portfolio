"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";

export default function ResumePage() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Only render the PDF viewer on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Korbin&apos;s Resume</title>
        <meta name="description" content="View Korbin Hillan's Resume" />
      </Head>

      <HeaderBar allLinksToHome={false} />

      <main className="pt-20 pb-12 min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Resume</h1>
          
          {/* Download button - always visible */}
          <div className="mb-6 flex justify-center">
            <a 
              href="/Korbin_Resume.pdf" 
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center gap-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M10 4a1 1 0 011 1v9a1 1 0 11-2 0V5a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Download Resume (PDF)
            </a>
          </div>
          
          {/* PDF Viewer - only rendered on client side */}
          {isMounted ? (
            <div className="rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden h-[800px] bg-white">
              {/* Using iframe for better compatibility */}
              <iframe 
                src="/Korbin_Resume.pdf" 
                className="w-full h-full"
                title="Korbin's Resume"
              />
            </div>
          ) : (
            <div className="flex justify-center items-center h-[800px] bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700">
              <div className="text-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300">Loading resume...</p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}