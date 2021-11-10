// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

export default function MetaTag(props) {
  return (
    <>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keyword} />
      <meta httpEquiv="content-language" content="th" />
      <meta httpEquiv="content-type" content="text/html" charSet="UTF-8" />
      <meta name="revisit-after" content="2 days" />
      <link rel="canonical" href={'https://poom-sci.vercel.app/' + props.path} />

      <meta property="og:title" content={props.title}></meta>
      <meta property="og:site_name" content="Poom-sci"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:image" content="https://poom-sci.vercel.app/cover/poom-web-cover.jpg" />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content="https://poom-sci.vercel.app/" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content="https://poom-sci.vercel.app/cover/poom-web-cover.jpg"></meta>
      <meta name="twitter:site" content="Poom-sci"></meta>
    </>
  );
}
