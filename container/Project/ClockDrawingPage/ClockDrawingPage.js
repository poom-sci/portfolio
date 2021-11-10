// import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Divider from '@material-ui/core/Divider';

// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import classes from './ClockDrawingPage.module.css';
import TopicImage from '../../../components/UI/TopicImage/TopicImage';
import { Typography } from '@material-ui/core';
// import ImageSlider from './ImageSlider/ImageSlider';
// import ProjectCards from './ProjectCards/ProjectCards';

export default function ClockDrawingPage(props) {
  return (
    <div className={classes.container}>
      <TopicImage
        coverImage="/cover/homepage-cover.jpg"
        alt_text="homepage_cover_image"
        title="Clock Drawing Analysis"
      />
      <Typography align="left" style={{ fontSize: '20px', padding: '30px' }} variant="h5" component="h3">
        A research project to analysis whether clock drawing task can be help in diagnosis the Parkinson
        disease patients among the other Moca test ( Montreal Cognitive Assessment ). developed by
        <br />
        <br />• python language
        <br />• NumPy
        <br />• Pandas
        <br />• Matplitlib
        <br />• scikit-learn
        <br />
        <br />
        <h4>Find Out More Info Here</h4>
        <div>
          <Link href="https://colab.research.google.com/drive/1yZadaFgGfwtolJe6iX-CfOzqWjOzvCLe?usp=sharing">
            <div className={classes.link}>Colab</div>
          </Link>
        </div>
        <div>
          <Link href="https://drive.google.com/file/d/15l7oLo7vDqPTueU-sRqVJYdVldz0OcGu/view">
            <div className={classes.link}>Document</div>
          </Link>
        </div>
      </Typography>
    </div>
  );
}
