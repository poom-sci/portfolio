import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

import Meta from '../../container/Function/Meta';
import NLPPage from '../../container/Project/NLPPage/NLPPage';

export default function pomelo() {
  return (
    <div>
      <Head>
        <title>Poom Suchao-in: Sentimental Analysis</title>
        <Meta
          path="project/nlp"
          title="Poom Suchao-in: Sentimental Analysis"
          keyword="Poom,Suchao-in,Poom Suchao-in,developer,ภูมิ สุเชาว์อินทร์,สุเชาว์อินทร์,จุฬา,Pomelo,intern"
          description="Poom Suchao-in: portfolio website"
        />
      </Head>
      <NLPPage />
    </div>
  );
}
