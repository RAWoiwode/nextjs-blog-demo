import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
  title: "Getting Started",
  slug: "getting-started",
  image: "getting-started.png",
  date: "2024-04-16",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
