import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

import ClockDrawingPage from '../../container/Project/ClockDrawingPage/ClockDrawingPage';
import Meta from '../../container/Function/Meta';

export default function clockDrawing() {
  return (
    <div>
      <Head>
        <title>Poom Suchao-in: Clock Drawing Analysis</title>
        <Meta
          path="project/clockDrawing"
          title="Poom Suchao-in: Clock Drawing Analysis"
          keyword="Poom,Suchao-in,Poom Suchao-in,developer,ภูมิ สุเชาว์อินทร์,จุฬา,Clock Drawing,Data Analysis"
          description="Poom Suchao-in: portfolio website"
        />
      </Head>
      <ClockDrawingPage />
    </div>
  );
}
