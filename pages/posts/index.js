import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

// Executes during the build process on the server
export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
