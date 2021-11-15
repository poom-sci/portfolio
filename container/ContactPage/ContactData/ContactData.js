import React, { Component } from 'react';

import classes from './ContactData.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

// import ContactDataForm from './ContactDataForm/ContactDataForm';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

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
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    // const formData = {
    // firstname: firstname,
    // lastname: lastname,
    // phone: phone,
    // email: email,
    // message: message,
    // };

    const template_params = {
      from_fname: firstname,
      from_lname: lastname,
      from_phone: phone,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        template_params,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(() => {
        this.setState({ sending: false, success: true });
      })
      .catch((err) => {
        this.setState({ sending: false, failed: true });
      });
  };

  render() {
    let form = (
      <form onSubmit={this.orderHandler}>
        <ContactDataForm />
      </form>
    );
    if (this.state.sending) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Tell Me Something</h4>
        {this.state.success ? (
          <Alert severity="success" sx={{ textAlign: 'left' }}>
            <AlertTitle>Send Email Complete Success</AlertTitle>
            Wait me a bit to reply you back — <strong>I have also CC email to you.</strong>
          </Alert>
        ) : null}
        {this.state.failed ? (
          <Alert severity="error" sx={{ textAlign: 'left' }}>
            <AlertTitle>Send Email Complete</AlertTitle>
            Something is broken — <strong>retry again sometimes later</strong>
          </Alert>
        ) : null}

        {form}
      </div>
    );
  }
}

export default withErrorHandler(ContactData, axios);
