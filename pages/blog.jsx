import HeaderBar from "../components/header";
import Footer from "../components/footer";
import "../src/app/globals.css";

export default function BlogComingSoon() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <HeaderBar allLinksToHome={true} />
      <main className="container mx-auto px-6 py-28 md:py-40 text-center">
        <h1 className="text-5xl font-extrabold">Blog</h1>
        <p className="text-gray-300 mt-4 text-lg">Coming soon.</p>
        <p className="text-gray-400 mt-2">I’m polishing drafts and will publish articles here shortly.</p>
      </main>
      <Footer />
    </div>
  );
}
