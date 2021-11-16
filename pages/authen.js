import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// import ContactPage from '../container/ContactPage/ContactPage';
import LoginData from '../container/LoginPage/LoginData/LoginData';
// import Classes from '../container/LoginPage/LoginPage.module.css';
import Classes from '../container/ContactPage/ContactPage.module.css';
import Meta from '../container/Function/Meta';

import dynamic from 'next/dynamic';
const TopicImage = dynamic(() => import('../components/UI/TopicImage/TopicImage'));

export default function Contact() {
  return (
    <div className={Classes.container}>
      <Head>
        <title>Poom Suchao-in: Login</title>
        <Meta
          path="login"
          title="Poom Suchao-in: portfolio website"
          keyword="Poom Suchao-in,engineering,ภูมิ สุเชาว์อินทร์,จุฬา"
          description="Poom Suchao-in: portfolio website"
        />
      </Head>
      <TopicImage
        coverImage="/cover/contact-us-cover.jpg"
        alt_text="contact_us_cover_image"
        title="Authentication"
      />
      <LoginData />
    </div>
  );
}
