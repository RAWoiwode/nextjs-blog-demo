import Markdown from "react-markdown";
import Image from "next/image";
import { PrismLight } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import classes from "./post-content.module.css";
import PostHeader from "./post-header";

PrismLight.registerLanguage("js", js);
PrismLight.registerLanguage("css", css);

/**
 * Render Markdown to JSX with 'react-markdown' package
 */
const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p: (paragraph) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code: (code) => {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js
      return (
        <PrismLight language={language} style={dracula} showLineNumbers>
          {children}
        </PrismLight>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <Markdown components={customRenderers}>{post.content}</Markdown>
    </article>
  );
};

export default PostContent;
