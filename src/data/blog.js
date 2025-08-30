export const blogPosts = [{}];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
