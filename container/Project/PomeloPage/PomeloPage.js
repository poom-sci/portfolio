// import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Divider from '@material-ui/core/Divider';

// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import classes from './PomeloPage.module.css';
import TopicImage from '../../../components/UI/TopicImage/TopicImage';
import { Typography } from '@material-ui/core';
// import ImageSlider from './ImageSlider/ImageSlider';
// import ProjectCards from './ProjectCards/ProjectCards';

export default function PomeloPage(props) {
  return (
    <div className={classes.container}>
      <TopicImage
        coverImage="/cover/homepage-cover.jpg"
        alt_text="homepage_cover_image"
        title="Pomelo Fashion Internship"
      />
      <Typography align="left" style={{ fontSize: '20px', padding: '30px ' }} variant="h5" component="h3">
        I have got an internship at Pomelo Fashion Internship 2020. There I have learn a lot of knowledge in
        the real world experiences.
      </Typography>
      <Typography
        align="left"
        style={{ fontSize: '18px', padding: '0 30px 30px 30px' }}
        variant="body"
        component="body"
      >
        The main focus work that I had done is :
        <br />● Event Tracking – Created and implemented User Event Tracking Program with Segment using
        JavaScript deployed on AWS
        <br />● Data Dashboard – Developed data dashboard using Datadog
        <br />● Capstone Project – Participated in a challenge which to create a demo for the new Pomelo,
        Prism, SASS program, including developing UX/UI with Figma
        <br />● Automated Test – Created and implemented Android and iOS automated test using WebdriverIO
        <br />
        <h4>Find Out More Info Here</h4>
        <div>
          <Link href="https://drive.google.com/file/d/1Bq6EOxMzYdVo1xFMA3PofKwPVcZBLSkD/view?usp=sharing">
            <div className={classes.link}>Certificate</div>
          </Link>
        </div>
        {/* <div>
          <Link href="https://drive.google.com/file/d/1hjAqSFsQarcXhqvJ6m7S8EIDySWaBcc1/view?usp=sharing">
            <div className={classes.link}>Document</div>
          </Link>
        </div> */}
      </Typography>

      {/* <Divider variant="middle" light /> */}
      {/* <ImageSlider /> */}
      {/* <ProjectCards /> */}
    </div>
  );
}
