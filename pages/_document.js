import Document, { Html, Head, Main, NextScript } from 'next/document';
import dynamic from 'next/dynamic';

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
          <script async src="https://cdn.splitbee.io/sb.js"></script>
          <meta name="google-site-verification" content="CFJplFjLKydgWqcLRCBf6u9z_bHko_lV3p_aQ0v9l-A" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap"
            rel="stylesheet"
          />
          <meta name="google-site-verification" content="kqg5HW-tLoFQit1C0JqdlMAzxCYtpbThKhO0wgnHwtQ" />
          <link
            href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;600;700;800;900&family=Merriweather:wght@300;400;700&family=Quicksand:wght@300;400;500;600;700&family=Mitr:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
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
