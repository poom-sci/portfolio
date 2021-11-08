import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

import BurgerPage from '../../container/Project/BurgerPage/BurgerPage';
import Meta from '../../container/Function/Meta';

export default function burgerApp() {
  return (
    <div>
      <Head>
        <title>Poom Suchao-in: Burger Application</title>
        <Meta
          path="project/burgerApp"
          title="Poom Suchao-in: Burger Application"
          keyword="Poom,Suchao-in,Poom Suchao-in,developer,ภูมิ สุเชาว์อินทร์,จุฬา,Pomelo,intern"
          description="Poom Suchao-in: portfolio website"
        />
      </Head>
      <BurgerPage />
    </div>
  );
}
