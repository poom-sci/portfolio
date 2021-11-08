// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function FacebookMessenger() {
  return (
    <div>
      <MessengerCustomerChat pageId="142038026391598" appId={process.env.NEXT_PUBLIC_APP_ID} />,
    </div>
  );
}
