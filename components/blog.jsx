"use client";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
  FaCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import Link from "next/link";
import { blogPosts as allPosts } from "../src/data/blog";

export default function Blog() {
  // mark first two as featured for the section
  const blogPosts = allPosts.map((p, i) => ({
    ...p,
    featured: i < 2,
    icon:
      p.category === "React" ? (
        <FaCode className="text-blue-400" />
      ) : p.category === "Next.js" ? (
        <FaRocket className="text-green-400" />
      ) : p.category === "Database" ? (
        <FaLightbulb className="text-yellow-400" />
      ) : p.category === "CSS" ? (
        <FaCode className="text-purple-400" />
      ) : (
        <FaRocket className="text-red-400" />
      ),
  }));

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="blog" className="min-h-screen px-6 md:px-20 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-4">
          Latest Articles
        </h1>
        <p className="text-gray-800 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Sharing insights, tutorials, and thoughts on web development, software
          engineering, and modern technologies.
        </p>
      </motion.div>

      {/* Featured Posts */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-white dark:text-white text-gray-900 mb-8 text-center">
          Featured Articles
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              variants={itemVariants}
              className="bg-gray-800 dark:bg-gray-800 bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] group"
            >
              {/* Post Header */}
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center relative">
                <div className="text-6xl text-white opacity-20">
                  {post.icon}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Post Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 dark:text-gray-400 text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock />
                    {post.readTime}
                  </span>
                </div>

                {/* Post Title */}
                <h3 className="text-xl font-bold text-white dark:text-white text-gray-900 mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                {/* Post Excerpt */}
                <p className="text-gray-300 dark:text-gray-300 text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Read More
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  >
                    <FaArrowRight size={14} />
                  </motion.div>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* Recent Posts */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-white dark:text-white text-gray-900 mb-8 text-center">
          Recent Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              variants={itemVariants}
              className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 hover:bg-gray-750 dark:hover:bg-gray-750 hover:bg-gray-100 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{post.icon}</div>
                  <div>
                    <span className="text-xs bg-gray-700 dark:bg-gray-700 bg-gray-200 text-gray-300 dark:text-gray-300 text-gray-600 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-400 text-gray-500">
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900 mb-3 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-300 dark:text-gray-300 text-gray-600 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 dark:text-gray-400 text-gray-500">
                  {formatDate(post.date)}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-gray-300 dark:text-gray-300 text-gray-600 mb-6">
          Want to stay updated with my latest articles and insights?
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          View All Articles
          <FaArrowRight />
        </Link>
      </motion.div>
    </section>
  );
}
