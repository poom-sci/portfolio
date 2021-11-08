// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// import classes from './ProductPages.modules.css';

import TopicImage from '../../../components/UI/TopicImage/TopicImage';
import Information from './Information/Information';

export default function ProductPages(props) {
  return (
    <div>
      <TopicImage coverImage="/cover/product-cover.jpg" alt_text="product_cover_image" title={props.title} />
      <Information />
    </div>
  );
}
