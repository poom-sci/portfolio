import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// import ContactPage from '../container/ContactPage/ContactPage';
import ContactData from '../container/ContactPage/ContactData/ContactData';
import Meta from '../container/Function/Meta';

import dynamic from 'next/dynamic';
const TopicImage = dynamic(() => import('../components/UI/TopicImage/TopicImage'));

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Poom Suchao-in: Contact Me</title>
        <Meta
          path="contact"
          title="Poom Suchao-in: portfolio website"
          keyword="Poom,Suchao-in,Poom Suchao-in,engineering,ภูมิ สุเชาว์อินทร์,จุฬา"
          description="Poom Suchao-in: portfolio website"
        />
      </Head>
      <TopicImage
        coverImage="/cover/contact-us-cover.jpg"
        alt_text="contact_us_cover_image"
        title="Contact Me"
      />
      <ContactData />
    </div>
  );
}
