import React from 'react';

// import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
// import Backdrop from '../../UI/Backdrop/Backdrop';
// import Aux from '../../../hoc/ReactAux/ReactAux';
// import poomLogoLabel from '../../../assets/poom.jpg';

import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Drawer
      // anchor={anchor}
      color="inherit"
      open={props.open}
      onClose={props.closed}
      onClick={props.closed}
    >
      <NavigationItems isAuthenticated={props.isAuth} onClick={props.closed} />
      {/* <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} >
                <div className={classes.Logo}>
                    <Logo imagePath={poomLogoLabel} onClick={props.closed} />
                </div>

            </div> */}
    </Drawer>
  );
};

export default sideDrawer;
