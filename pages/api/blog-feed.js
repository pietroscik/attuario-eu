import { BLOG_POSTS } from "../../content/pages/blog";

export default function handler(req, res) {
  res.status(200).json({
    generatedAt: new Date().toISOString(),
    posts: BLOG_POSTS,
  });
}
