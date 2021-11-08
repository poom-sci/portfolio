// import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import classes from './ImageSlider.module.css';

const project = {
  data1: {
    image: '/page/home/game-cover.jpg',
    alt_text: 'game icon cover image',
    title: 'Treason',
    url: '/',
  },
  data2: {
    image: '/page/home/burger-cover.jpg',
    alt_text: 'game icon cover image',
    title: 'Burger Shop',
    url: '/',
  },
  data3: {
    image: '/page/home/clock-cover.jpg',
    alt_text: 'game icon cover image',
    title: 'Clock Drawing',
    url: '/',
  },
};

function ImageSlider(props) {
  return (
    <div className={classes.container}>
      <h3>My Project</h3>
      <Slide duration={8000} indicators>
        {Object.keys(project).map((key, index) => (
          <Link href={project[key].url} key={index}>
            <div className={classes.eachSlide} key={index}>
              <img className={classes.slideImage} src={project[key].image} />
              {/* <span
            className={classes.slider}
            style={{
              backgroundImage: project[key].image,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              flexDirection: index % 2 === 0 ? 'column-reverse' : 'column',
              fontFamily: `'Merriweather', serif`,
            }}
            aria-label={project[key].alt_text}
            role="img"
          > */}
              <h4 className={classes.title}>{project[key].title}</h4>
              {/* </span> */}
            </div>
          </Link>
        ))}
      </Slide>
    </div>
    // </Link>
  );
}

export default ImageSlider;
