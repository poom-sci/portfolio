import React from 'react';

import classes from './FooterSocial.module.css';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';

const style = { color: '#ffd883', width: 40, height: 40 };

const socialFooterData = {
  data1: {
    alt: 'githubLogo',
    link: 'https://github.com/poom-sci',
    icon: <GitHubIcon style={style} />,
  },
  data2: {
    alt: 'facebookLogo',
    link: 'https://www.facebook.com/poom.suchaoin/',
    icon: <FacebookIcon style={style} />,
  },
  data3: {
    alt: 'instagramLogo',
    link: 'https://www.instagram.com/poom.sci/',
    icon: <InstagramIcon style={style} />,
  },
  data4: {
    alt: 'mailLogo',
    link: 'mailto:poom.suchaoin@gmail.com',
    icon: <EmailIcon style={style} />,
  },
  data5: {
    alt: 'linkinedLogo',
    link: 'https://www.linkedin.com/in/poom-sci/',
    icon: <LinkedInIcon style={style} />,
  },
};

const Icons = Object.keys(socialFooterData).map((data) => {
  return (
    <a href={socialFooterData[data].link} key={data}>
      {socialFooterData[data].icon}
    </a>
  );
});

const footerSocial = (props) => <div className={classes.FooterSocial}>{Icons}</div>;

export default footerSocial;
