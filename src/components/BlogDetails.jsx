"use client"

const BlogDetails = ({blog}) => {
    return (
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-700">{blog.body}</p>
        </div>
      );
};

export default BlogDetails;