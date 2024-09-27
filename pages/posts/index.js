import AllPosts from "@/components/posts/all-posts";

const DUMMY_POSTS = [
  {
    title: "Getting Started",
    slug: "getting-started",
    image: "getting-started.png",
    excerpt: "NextJS is the React Framework for production",
    date: "2024-04-16",
  },
  {
    title: "Getting Started",
    slug: "getting-started2",
    image: "getting-started.png",
    excerpt: "NextJS is the React Framework for production",
    date: "2024-04-16",
  },
  {
    title: "Getting Started",
    slug: "getting-started3",
    image: "getting-started.png",
    excerpt: "NextJS is the React Framework for production",
    date: "2024-04-16",
  },
  {
    title: "Getting Started",
    slug: "getting-started4",
    image: "getting-started.png",
    excerpt: "NextJS is the React Framework for production",
    date: "2024-04-16",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
