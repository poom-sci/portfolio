// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

import classes from './ProductPage.module.css';
import TopicImage from '../../components/UI/TopicImage/TopicImage';
import Information from './Information/Information';

export default function ProductPage() {
  return (
    <div className={classes.container}>
      <TopicImage coverImage="/cover/product-cover.jpg" alt_text="product_cover_image" title="Product" />
      <Information />
    </div>
  );
}
