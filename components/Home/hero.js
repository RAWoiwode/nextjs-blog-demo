import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/RalphBlogDemo.png"}
          alt="An image showing Ralph"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Ralph</h1>
      <p>Blog about front-end dev</p>
    </section>
  );
};

export default Hero;
