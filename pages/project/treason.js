import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

import TreasonPage from '../../container/Project/TreasonPage/TreasonPage';
import Meta from '../../container/Function/Meta';

export default function treason() {
  return (
    <div>
      <Head>
        <title>Poom Suchao-in: Game Treason</title>
        <Meta
          path="project/treason"
          title="Poom Suchao-in: Game Treason"
          keyword="Poom,Suchao-in,developer,ภูมิ สุเชาว์อินทร์,จุฬา,Treason,game,experiences"
          description="Poom Suchao-in: portfolio website"
        />
      </Head>
      <TreasonPage />
    </div>
  );
}
