import React, { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import Image from 'next/image';
import { useDispatch } from 'react-redux';

// import Classes from './Toolbar.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';
import * as actions from '../../../store/actions/index';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Menu, Avatar, Box, Slide, useScrollTrigger } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // textDecoration: "none",
  },
  menuButton: {
    '@media (min-width:501px)': {
      display: 'none',
    },
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    '@media (max-width:500px)': {
      display: 'none',
    },
  },
  logoButton: {
    display: 'inline-Block',
    textDecoration: 'none',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all 100ms ease-in',
    },
  },
  box: { flexGrow: 1 },
}));

export default function AppToolbar(props) {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const logout = useCallback(() => dispatch(actions.logout()));

  // const handleChange = (event) => {
  //   //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const trigger = useScrollTrigger();
  const trigger = false;
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="fixed" style={{ background: '#ffd883', justifyContent: 'space-between' }}>
        <Toolbar>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={props.drawerToggleClicked}
          >
            <MenuIcon style={{ fill: 'black' }} />
          </IconButton>
          <Box className={classes.box}>
            <Link href="/">
              <a>
                <Avatar className={classes.logoButton} variant="circular" alt="logo" src="/poom-logo.jpg" />
              </a>
            </Link>
          </Box>
          <Box className={classes.navButton}>
            <NavigationItems isAuthenticated={props.isAuth} />
          </Box>

          <Box>
            {/* <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              {/* <Link component={RouterLink} to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>

              <MenuItem
                onClick={() => {
                  logout();
                  handleClose();
                  router.push('/');
                }}
              >
                Logout
              </MenuItem> */}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
