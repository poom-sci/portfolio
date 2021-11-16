import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import axios from '../axios-orders';
// import axios from 'axios';

import dynamic from 'next/dynamic';
import Meta from '../container/Function/Meta';

import { Divider } from '@material-ui/core';

import ProjectCards from '../container/Homepage/ProjectCards/ProjectCards';

const TopicImage = dynamic(() => import('../components/UI/TopicImage/TopicImage'));

function Home() {
  console.log('Homepage');
  return (
    <div>
      <Head>
        <title>Poom Suchao-in: portfolio website</title>
        <Meta
          path=""
          title="Poom Suchao-in: portfolio website"
          keyword="Poom Suchao-in,engineering,ภูมิ สุเชาว์อินทร์,จุฬา"
          description="Poom Suchao-in: portfolio website"
        />
      </Head>

      <TopicImage coverImage="/cover/homepage-cover.jpg" alt_text="homepage_cover_image" title="Homepage" />
      <Divider variant="middle" light />
      {/* <ImageSlider /> */}
      <ProjectCards />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   let project = await axios.get('https://grable-pro-default-rtdb.firebaseio.com/project.json');
//   project = project.data;

//   return {
//     props: { project }, // will be passed to the page component as props
//   };
// }

export default Home;
