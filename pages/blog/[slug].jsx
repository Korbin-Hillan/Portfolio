import HeaderBar from "../../components/header";
import Footer from "../../components/footer";
import { blogPosts, getPostBySlug } from "../../src/data/blog";
import Link from "next/link";

export async function getStaticPaths() {
  const paths = blogPosts.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug) || null;
  return { props: { post } };
}

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <HeaderBar allLinksToHome={true} />
        <main className="container mx-auto px-6 py-28">
          <h1 className="text-2xl">Post not found.</h1>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">Back to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString) => {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <HeaderBar allLinksToHome={true} />
      <main className="container mx-auto px-6 py-28 max-w-3xl">
        <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-200">← All posts</Link>
        <h1 className="text-4xl font-bold mt-3">{post.title}</h1>
        <div className="text-gray-400 text-sm mt-2">{formatDate(post.date)} • {post.readTime} • {post.category}</div>
        {post.tags?.length ? (
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded bg-gray-800 border border-gray-700 text-gray-400">{t}</span>
            ))}
          </div>
        ) : null}

        <article className="prose prose-invert max-w-none mt-8">
          {post.content?.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
}

