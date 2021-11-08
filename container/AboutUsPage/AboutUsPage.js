// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

import styles from './AboutUsPage.module.css';
import TopicImage from '../../components/UI/TopicImage/TopicImage';
import Information from './Information/Information';

export default function AboutUsPage() {
  return (
    <div className={styles.container}>
      <TopicImage coverImage="/cover/about-us-cover.jpg" alt_text="about_us_cover_image" title="About Us" />
      <Information />
    </div>
  );
}
