// import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Divider from '@material-ui/core/Divider';

// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import classes from './TreasonPage.module.css';
import TopicImage from '../../../components/UI/TopicImage/TopicImage';
import { Typography } from '@material-ui/core';
import YouTube from 'react-youtube';
import { ClassSharp } from '@material-ui/icons';
// import ImageSlider from './ImageSlider/ImageSlider';
// import ProjectCards from './ProjectCards/ProjectCards';

export default function TreasonPage(props) {
  const opts = {
    // height: '390',
    // width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <div className={classes.container}>
      <TopicImage
        coverImage="/cover/homepage-cover.jpg"
        alt_text="homepage_cover_image"
        title="Game Treason"
      />
      <YouTube videoId="VRhEB2gr5dE" className={classes.youtubePlayer} opts={opts} onReady={_onReady} />
      <Typography align="left" style={{ fontSize: '20px', padding: '30px' }} variant="h5" component="h3">
        Treason is a game that inspired by contra, run and gun video game. The objective of the treason game
        is to win the enemy along the game and defeat the final boss at the end. developed by
        <br />
        <br />• java language
        <br />• javaFX
        <br />• main function is collsion box
        <br />
        <br />
        <h4>Find Out More Info Here</h4>
        <div>
          <Link href="https://github.com/poom-sci/TREASON">
            <div className={classes.link}>Github</div>
          </Link>
        </div>
        <div>
          <Link href="https://github.com/poom-sci/TREASON/blob/master/Treason%20Documentation.pdf">
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
