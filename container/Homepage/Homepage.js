// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Divider } from '@material-ui/core';

// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import classes from './Homepage.module.css';
import TopicImage from '../../components/UI/TopicImage/TopicImage';
// import ImageSlider from './ImageSlider/ImageSlider';
import ProjectCards from './ProjectCards/ProjectCards';

function Homepage(props) {
  return (
    <div className={classes.container}>
      <TopicImage coverImage="/cover/homepage-cover.jpg" alt_text="homepage_cover_image" title="Homepage" />
      <Divider variant="middle" light />
      {/* <ImageSlider /> */}
      <ProjectCards />
    </div>
  );
}

export default Homepage;
