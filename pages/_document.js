import Document, { Html, Head, Main, NextScript } from 'next/document';
// import * as snippet from '@segment/snippet';
// import Meta from '../container/Meta/Meta';

// const {
//   //  This write key is associated with https://segment.com/nextjs-example/sources/nextjs.
//   NODE_ENV = 'development',
// } = process.env;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  // renderSnippet() {
  // const opts = {
  //   apiKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY,
  //   // note: the page option only covers SSR tracking.
  //   // Page.js is used to track other events using `window.analytics.page()`
  //   page: true,
  // };
  // if (NODE_ENV === 'development') {
  //   return snippet.max(opts);
  // }
  // return snippet.min(opts);
  // }

  render() {
    return (
      <Html>
        <Head>
          {/* <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} /> */}
          <meta name="google-site-verification" content="CFJplFjLKydgWqcLRCBf6u9z_bHko_lV3p_aQ0v9l-A" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap"
            rel="stylesheet"
          />
          <meta name="google-site-verification" content="kqg5HW-tLoFQit1C0JqdlMAzxCYtpbThKhO0wgnHwtQ" />
          {/*
              font-family: 'Alegreya', serif;
              font-family: 'Merriweather', serif;
              font-family: 'Quicksand', sans-serif; eng
              font-family: 'Mitr', sans-serif; ไทย
          */}
          <link
            href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;600;700;800;900&family=Merriweather:wght@300;400;700&family=Quicksand:wght@300;400;500;600;700&family=Mitr:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
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
