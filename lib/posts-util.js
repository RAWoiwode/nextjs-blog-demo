import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content/posts");

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

/**
 * Get the data and content for a single post and construct the postData obj for use
 *
 * @param {string} postIdentifier
 * @returns postData
 */
export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`); // Returns absolute filepath
  const fileContent = fs.readFileSync(filePath, "utf-8"); // Returns string
  const { data, content } = matter(fileContent); // Returns obj

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

/**
 * Go through all posts on the File System and derive meta data(gray matter) and markdown
 * for each post
 */
export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

/**
 * Get only the featured posts
 *
 * @returns featuredPosts
 */
export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
