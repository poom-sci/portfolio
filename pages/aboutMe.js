import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Component } from 'react';
import Meta from '../container/Function/Meta';

import styles from '../container/AboutUsPage/AboutUsPage.module.css';
import Information from '../container/AboutUsPage/Information/Information';

const TopicImage = dynamic(() => import('../components/UI/TopicImage/TopicImage'));

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Poom Suchao-in: About Me</title>
          <Meta
            path="aboutMe"
            title="Poom Suchao-in: About Me"
            keyword="Poom Suchao-in,engineering,ภูมิ สุเชาว์อินทร์,จุฬา"
            description="Poom Suchao-in: portfolio website Get to know more about me"
          />
        </Head>
        <TopicImage coverImage="/cover/about-us-cover.jpg" alt_text="about_us_cover_image" title="About Me" />
        <Information />
      </div>
    );
  }
}

export default AboutUs;
