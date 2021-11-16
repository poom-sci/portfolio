import React, { Component } from 'react';

import classes from './LoginData.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

// import ContactDataForm from './ContactDataForm/ContactDataForm';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
// import emailjs from 'emailjs-com';

import dynamic from 'next/dynamic';

const emailjs = dynamic(() => import('emailjs-com'));

const ContactDataForm = dynamic(() => import('./ContactDataForm/ContactDataForm'), {
  return: (
    <Skeleton variant="rectangular" width="100%">
      <div style={{ height: '400px' }} />
    </Skeleton>
  ),
});

class ContactData extends Component {
  state = {
    formIsValid: false,
    sending: false,
    success: false,
    failed: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({ sending: true, failed: false, success: false });

    const form = event.target;
    // const firstname = form.firstname.value;
    // const lastname = form.lastname.value;
    const email = form.email.value;
    const password = form.password.value;
    // const message = form.message.value;

    // const form = {
    //   email: email,
    //   password: password,
    // };

    this.props.onAuth(email, password, true);
    // axios
    //   .post()
    //   .then((response) => {
    //     this.setState({ sending: false, success: true });
    //   })
    //   .catch((err) => {
    //     this.setState({ sending: false, failed: true });
    //   });
  };

  render() {
    let form = (
      <form onSubmit={this.orderHandler}>
        <ContactDataForm />
      </form>
    );

    if (this.props.isAuthenticated) {
      form = (
        <Alert severity="success" sx={{ textAlign: 'left' }}>
          <AlertTitle>Login Complete Success</AlertTitle>
        </Alert>
      );
    }

    if (this.props.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>{!this.props.isAuthenticated ? 'Login' : 'Logout'}</h4>
        {/* {this.state.success ? (
          <Alert severity="success" sx={{ textAlign: 'left' }}>
            <AlertTitle>Login Complete Success</AlertTitle>
          </Alert>
        ) : null} */}
        {this.props.error ? (
          <Alert severity="error" sx={{ textAlign: 'left' }}>
            <AlertTitle>Login Failed</AlertTitle>
            Something is broken — <strong>retry again sometimes later</strong>
          </Alert>
        ) : null}

        {form}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token != null,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    onSetRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
    onAuthLogout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
