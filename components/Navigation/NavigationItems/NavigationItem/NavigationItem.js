import React from 'react';
// import { NavLink } from "react-router-dom";
import Link from 'next/link';
// import Link from '../../../UI/Link/Link';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
  let className = [classes.NavigationItem];
  const router = useRouter();
  // if (router.asPath === props.link) {
  // className.push(classes.active);
  // }

  return (
    <div className={className.join(' ')}>
      <Link href={props.link} exact={props.exact} onClick={props.onClick} scroll>
        <a className={router.asPath === props.link ? classes.active : null}>{props.children}</a>
      </Link>
    </div>
  );
};
// export async function getServerSideProps(context) {
//   return {
//     props: {}, // Will be passed to the page component as props
//   };
// }
export default navigationItem;
