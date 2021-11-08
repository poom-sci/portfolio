/* eslint-disable react/prop-types */

import React from 'react';
import Link from 'next/link';
// import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const ActiveLink = (props) => {
  const router = useRouter();

  const child = props.children;
  let className = '';

  if (props.className) {
    className = props.className;
  }
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  return <Link href={'/'}>{React.cloneElement(child, { className })}</Link>;
};

export default ActiveLink;
