import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

import DepressionPage from '../../container/Project/DepressionPage/DepressionPage';
import Meta from '../../container/Function/Meta';

export default function depression() {
  return (
    <div>
      <Head>
        <title>Poom Suchao-in: Depression Application (Data Mind Lab)</title>
        <Meta
          path="project/pomelo"
          title="Poom Suchao-in: Depression Application (Data Mind Lab)"
          keyword="Poom,Suchao-in,Poom Suchao-in,developer,ภูมิ สุเชาว์อินทร์,จุฬา,Depression,Application,Data"
          description="Poom Suchao-in: portfolio website"
        />
      </Head>
      <DepressionPage />
    </div>
  );
}
