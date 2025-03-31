import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

export default function ResumePDFViewer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const iframeRef = useRef(null);

  // Set title and handle loading state
  useEffect(() => {
    document.title = "Korbin's Resume";

    // Simulate progress to give user feedback while loading
    let progressInterval;
    if (loading) {
      // Simulate gradual progress up to 90% (the final 10% happens when actually loaded)
      progressInterval = setInterval(() => {
        setLoadProgress((prev) => {
          if (prev < 90) {
            return prev + (90 - prev) * 0.1;
          }
          return prev;
        });
      }, 200);
    }

    // Set a shorter timeout of 5 seconds instead of 10
    const loadingTimeout = setTimeout(() => {
      if (loading) {
        console.log(
          "PDF loading timed out - forcing loading state to complete"
        );
        setLoading(false);
      }
    }, 5000);

    return () => {
      clearTimeout(loadingTimeout);
      clearInterval(progressInterval);
    };
  }, [loading]);

  // Handle iframe events - simplified to use only one approach
  const handleIframeLoad = () => {
    console.log("PDF loaded successfully");
    // Set progress to 100% and hide loading indicator
    setLoadProgress(100);
    setLoading(false);
  };

  const handleIframeError = () => {
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

        {/* Preload PDF to improve loading time */}
        <link rel="preload" href="/Korbin_Resume.pdf" as="document" />
      </Head>

      {/* Header */}
      <Header allLinksToHome={true} />

      {/* PDF Viewer with loading and error states */}
      <div className="bg-white dark:bg-gray-900 pt-18 -mb-12">
        {loading && (
          <div className="flex flex-col h-[calc(100vh-4rem)] items-center justify-center">
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

        {error && (
          <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
            <div className="text-center max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <p className="text-red-600 dark:text-red-400 text-lg mb-4">
                Sorry, we couldn&apos;t load the PDF
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                There was an error loading the resume. Please try downloading it
                instead.
              </p>
              <a
                href="/Korbin_Resume.pdf"
                download
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded"
              >
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        )}

        <div className={loading || error ? "hidden" : "h-[calc(100vh-4rem)]"}>
          <iframe
            ref={iframeRef}
            src="/Korbin_Resume.pdf#toolbar=1"
            className="w-full h-full border-0"
            title="Korbin's Resume"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
