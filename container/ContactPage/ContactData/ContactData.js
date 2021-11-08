import React, { Component } from 'react';

import classes from './ContactData.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

import ContactDataForm from './ContactDataForm/ContactDataForm';

import emailjs from 'emailjs-com';

class ContactData extends Component {
  state = {
    formIsValid: false,
    sending: false,
    success: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({ sending: true });

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
        this.setState({ sending: false });
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

    let success = null;
    if (this.state.success) {
      success = <p>SENDING SUCCESS</p>;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Get in touch with us</h4>
        {form}
        {success}
      </div>
    );
  }
}

export default withErrorHandler(ContactData, axios);
