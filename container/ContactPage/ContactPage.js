// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

import styles from './ContactPage.module.css';

import ContactData from './ContactData/ContactData';
import TopicImage from '../../components/UI/TopicImage/TopicImage';
// import GoogleMap from './GoogleMap/GoogleMap';
// import { Card, Typography } from '@material-ui/core';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <TopicImage
        coverImage="/cover/contact-us-cover.jpg"
        alt_text="contact_us_cover_image"
        title="Contact Us"
      />
      <ContactData />
      {/* <Card style={{ backgroundColor: '#ffd883d0', margin: '40px 50px', padding: '20px' }}>
        <Typography align="center" variant="h5" component="h3">
          ติดต่อเรา
        </Typography>
        <Typography align="center" variant="body1" component="h5">
          เบอร์ติดต่อ: 081-343-4433 (คุณวิชัย) | อีเมล: grablepro@gmail.com
        </Typography>
      </Card> */}

      {/* <GoogleMap /> */}
    </div>
  );
}
