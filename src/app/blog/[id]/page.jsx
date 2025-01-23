
import BlogDetails from "@/components/BlogDetails";

const BlogDetailsPage = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const blog = await res.json();

  return <BlogDetails blog={blog} />;
};

export default BlogDetailsPage;