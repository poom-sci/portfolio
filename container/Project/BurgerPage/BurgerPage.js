// import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Divider from '@material-ui/core/Divider';

// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import classes from './BurgerPage.module.css';
import TopicImage from '../../../components/UI/TopicImage/TopicImage';
import { Typography } from '@material-ui/core';
// import ImageSlider from './ImageSlider/ImageSlider';
// import ProjectCards from './ProjectCards/ProjectCards';

export default function BurgerPage(props) {
  return (
    <div className={classes.container}>
      <TopicImage
        coverImage="/cover/homepage-cover.jpg"
        alt_text="homepage_cover_image"
        title="Burger Application"
      />
      <Typography align="left" style={{ fontSize: '20px', padding: '30px' }} variant="h5" component="h3">
        A web application which inspired by a burger shop and a online store. What if you can order the burger
        by selecting your own ingredients. So this is the beginning of this project. developed by
        <br />
        <br />• JavaScript language
        <br />• React.js Framework
        <br />• redux
        <br />• react-router
        <br />• axios
        <br />• deploy on firebase
        <br />
        <br />
        <h4>Find Out More Info Here</h4>
        <div>
          <Link href="https://web-app-1-f4f1d.web.app/">
            <div className={classes.link}>Website</div>
          </Link>
        </div>
        <div>
          <Link href="https://github.com/poom-sci/web-app-1">
            <div className={classes.link}>Github</div>
          </Link>
        </div>
      </Typography>

      {/* <Divider variant="middle" light /> */}
      {/* <ImageSlider /> */}
      {/* <ProjectCards /> */}
    </div>
  );
}
