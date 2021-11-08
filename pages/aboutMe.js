import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Component } from 'react';

import { useRouter } from 'next/router';

import AboutUsPage from '../container/AboutUsPage/AboutUsPage';
import Meta from '../container/Function/Meta';

class AboutUs extends Component {
  state = { ip: null };

  constructor(props) {
    super(props);
    // this.router = useRouter();
  }

  render() {
    return (
      <div>
        <Head>
          <title>Poom Suchao-in: About Me</title>
          <Meta
            path="aboutMe"
            title="Poom Suchao-in: About Me"
            keyword="Poom,Suchao-in,Poom Suchao-in,engineering,ภูมิ สุเชาว์อินทร์,จุฬา"
            description="Poom Suchao-in: portfolio website Get to know more about me"
          />
        </Head>
        <AboutUsPage />
      </div>
    );
  }
}

export default AboutUs;
