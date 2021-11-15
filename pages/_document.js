import Document, { Html, Head, Main, NextScript } from 'next/document';
import dynamic from 'next/dynamic';

const Tag = dynamic(() => import('../container/Function/TagHeader'));
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} /> */}
          <Tag />
          {/*
              font-family: 'Alegreya', serif;
              font-family: 'Merriweather', serif;
              font-family: 'Quicksand', sans-serif; eng
              font-family: 'Mitr', sans-serif; ไทย
          */}

          {/* <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
