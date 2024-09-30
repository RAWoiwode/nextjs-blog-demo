import Head from "next/head";

import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" content="A list of all stuff" />
      </Head>
      <AllPosts posts={posts} />;
    </>
  );
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
