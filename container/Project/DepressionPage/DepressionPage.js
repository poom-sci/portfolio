// import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Divider from '@material-ui/core/Divider';

// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import classes from './DepressionPage.module.css';
import TopicImage from '../../../components/UI/TopicImage/TopicImage';
import { Typography } from '@material-ui/core';
// import ImageSlider from './ImageSlider/ImageSlider';
// import ProjectCards from './ProjectCards/ProjectCards';

export default function DepressionPage(props) {
  return (
    <div className={classes.container}>
      <TopicImage
        coverImage="/cover/homepage-cover.jpg"
        alt_text="homepage_cover_image"
        title="Depression Application"
      />
      <Typography align="left" style={{ fontSize: '20px', padding: '30px' }} variant="h5" component="h3">
        Developed Machine Learning (BiLSTM and CNN) model to predict depression score from visual data using
        TensorFlow
        <br />• Pandas
        <br />• NumPy
        <br />• Tableau
        <br />
        <br />
        <h4>Find Out More Info Here</h4>
        <div>
          <Link href="https://colab.research.google.com/drive/1aI_fiH6v1M2w_elA-vHGPEK_mqo1gz4A#scrollTo=4UyLpVACh1l-">
            <div className={classes.link}>Colab</div>
          </Link>
        </div>
        <div>
          <Link href="https://drive.google.com/file/d/1hjAqSFsQarcXhqvJ6m7S8EIDySWaBcc1/view?usp=sharing">
            <div className={classes.link}>Document</div>
          </Link>
        </div>
      </Typography>

      {/* <Divider variant="middle" light /> */}
      {/* <ImageSlider /> */}
      {/* <ProjectCards /> */}
    </div>
  );
}
