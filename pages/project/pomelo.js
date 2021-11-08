import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

import PomeloPage from '../../container/Project/PomeloPage/PomeloPage';
import Meta from '../../container/Function/Meta';

export default function pomelo() {
  return (
    <div>
      <Head>
        <title>Poom Suchao-in: Pomelo Fashion Internship</title>
        <Meta
          path="project/pomelo"
          title="Poom Suchao-in: Pomelo Fashion Internship"
          keyword="Poom,Suchao-in,Poom Suchao-in,developer,ภูมิ สุเชาว์อินทร์,จุฬา,Pomelo,intern"
          description="Poom Suchao-in: portfolio website"
        />
      </Head>
      <PomeloPage />
    </div>
  );
}
