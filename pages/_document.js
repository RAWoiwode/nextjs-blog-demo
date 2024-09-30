import Document, { Html, Head, Main, NextScript } from "next/document";

// This helps with setting up additional metadata and adding React portals
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
