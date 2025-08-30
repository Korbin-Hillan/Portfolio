"use client";
import HeaderBar from "../components/header";
import Footer from "../components/footer";
import { useMemo, useState } from "react";
import { blogPosts } from "../src/data/blog";
import { FaCalendarAlt, FaClock, FaSearch } from "react-icons/fa";
import Link from "next/link";
import "../src/app/globals.css";

export default function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))],
    []
  );

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchesCat = category === "All" || p.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [category, query]);

  const formatDate = (dateString) => {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <HeaderBar allLinksToHome={true} />
      <main className="container mx-auto px-6 py-28 md:py-32">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-2">
            Insights, tutorials, and notes from projects.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between mb-8">
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-full text-sm border ${
                  c === category
                    ? "bg-blue-600 border-blue-600"
                    : "bg-gray-800 border-gray-700 hover:bg-gray-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, tag, or keywords..."
              className="w-full pl-10 pr-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-gray-800 bg-gray-900/60 p-5 hover:bg-gray-900 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-2 py-1 rounded bg-gray-800 border border-gray-700 text-gray-300">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-gray-300 text-sm mt-2 line-clamp-3">
                {post.excerpt}
              </p>
              {!!(post.tags && post.tags.length) && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-gray-800 border border-gray-700 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
                <span className="inline-flex items-center gap-1">
                  <FaCalendarAlt /> {formatDate(post.date)}
                </span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
