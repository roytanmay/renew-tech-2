import BlogComponent from "../components/blog/BlogComponent";
import DUMMY_BLOGS from "../components/blog/DummyBlogs";

const Blog = () => {
  return (
      <div className="flex flex-col gap-20 mx-64 my-10">
        {DUMMY_BLOGS.map((blog) => (
          <BlogComponent
            key={blog.id}
            id={blog.id}
            image={blog.img}
            title={blog.title}
            content={blog.content}
          />
        ))}
      </div>
  );
};

export default Blog;
