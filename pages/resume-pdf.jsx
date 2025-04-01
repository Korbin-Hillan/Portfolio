"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

export default function ResumePDFViewer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [iframeKey, setIframeKey] = useState(Date.now());

  useEffect(() => {
    document.title = "Korbin's Resume";

    // Simulate progress to give user feedback while loading
    let progressInterval;
    if (loading) {
      progressInterval = setInterval(() => {
        setLoadProgress((prev) => {
          if (prev < 90) {
            return prev + (90 - prev) * 0.1;
          }
          return prev;
        });
      }, 200);
    }

    // Set a timeout to force loading complete after 5 seconds
    const loadingTimeout = setTimeout(() => {
      if (loading) {
        console.log("PDF loading timed out - forcing loading state to complete");
        setLoading(false);
      }
    }, 5000);

    return () => {
      clearTimeout(loadingTimeout);
      clearInterval(progressInterval);
    };
  }, [loading]);

  // Simple function to handle iframe load events
  const handleContentLoad = () => {
    console.log("PDF content loaded");
    setLoadProgress(100);
    setLoading(false);
  };

  // Simple function to handle iframe error events
  const handleContentError = () => {
    console.error("Error loading PDF");
    setLoading(false);
    setError(true);
  };

  return (
    <>
      <Head>
        <title>Korbin&apos;s Resume</title>
        <meta name="description" content="View Korbin Hillan's Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Header */}
      <Header allLinksToHome={true} />

      {/* Main content area */}
      <div className="bg-white dark:bg-gray-900 pt-20 pb-12 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Resume</h1>
          
          {/* Download button - smaller and more subtle */}
          <div className="mb-6 flex justify-end">
            <a 
              href="/Korbin_Resume.pdf"
              download="Korbin_Hillan_Resume.pdf"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm shadow-sm transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M10 4a1 1 0 011 1v9a1 1 0 11-2 0V5a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Download PDF
            </a>
          </div>

          {/* Loading state */}
          {loading && (
            <div className="flex flex-col h-[600px] items-center justify-center">
              <div className="text-center w-64">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${loadProgress}%` }}
                  ></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Loading resume... {Math.round(loadProgress)}%
                </p>
              </div>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="flex h-[600px] items-center justify-center">
              <div className="text-center max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <p className="text-red-600 dark:text-red-400 text-lg mb-4">
                  Sorry, we couldn&apos;t load the PDF
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  There was an error loading the resume. Please try downloading it
                  instead using the button above.
                </p>
              </div>
            </div>
          )}

          {/* PDF Viewer - using iframe with key for potential refresh */}
          <div className={loading || error ? "hidden" : "h-[600px] rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700"}>
            <iframe
              key={iframeKey}
              src="/Korbin_Resume.pdf"
              className="w-full h-full"
              title="Korbin's Resume"
              onLoad={handleContentLoad}
              onError={handleContentError}
              allow="fullscreen"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}