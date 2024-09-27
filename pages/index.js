import FeaturedPosts from "@/components/home/featured-posts";
import Hero from "@/components/home/hero";
import { getFeaturedPosts } from "@/lib/posts-util";

// const DUMMY_POSTS = [
//   {
//     title: "Getting Started",
//     slug: "getting-started",
//     image: "getting-started.png",
//     excerpt: "NextJS is the React Framework for production",
//     date: "2024-04-16",
//   },
//   {
//     title: "Getting Started",
//     slug: "getting-started2",
//     image: "getting-started.png",
//     excerpt: "NextJS is the React Framework for production",
//     date: "2024-04-16",
//   },
//   {
//     title: "Getting Started",
//     slug: "getting-started3",
//     image: "getting-started.png",
//     excerpt: "NextJS is the React Framework for production",
//     date: "2024-04-16",
//   },
//   {
//     title: "Getting Started",
//     slug: "getting-started4",
//     image: "getting-started.png",
//     excerpt: "NextJS is the React Framework for production",
//     date: "2024-04-16",
//   },
// ];

const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
