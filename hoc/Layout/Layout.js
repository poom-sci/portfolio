import React, { Component } from 'react';
import { connect } from 'react-redux';
// import dynamic from 'next/dynamic';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';
// import Container from '@material-ui/core/Container';

// const FacebookMessenger = dynamic(() => import('../../components/FacebookPlugin/FacebookMessenger'));

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar isAuth={false} drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} isAuth={false} closed={this.sideDrawerClosedHandler} />
        <div className={classes.Content}>{this.props.children}</div>
        <Footer />
        {/* <FacebookMessenger /> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
