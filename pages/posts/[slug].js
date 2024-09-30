import { getPostData, getPostsFiles } from "@/lib/posts-util";
import PostContent from "../../components/posts/post-detail/post-content";

const PostDetailPage = ({ post }) => {
  return <PostContent post={post} />;
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

// Returns object with all paths that should be prepared
export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
};

export default PostDetailPage;
