import React from 'react';

import classes from './RegisterForm.module.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#fcc652',
    },
    // '& .MuiInput-underline:before': {
    // borderBottom: '2px solid green',
    // },
    // "& .MuiInput-underline:after": {
    //   borderBottomColor: "yellow",
    // },
    '& .MuiInputBase-input': {
      color: '#fcc652', // Text color
    },
    '& .MuiInput-underline:before': {
      // borderBottomColor: '#fcc652', // Semi-transparent underline
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#fcc652a0', // Solid underline on hover
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fcc652', // Solid underline on focus
    },
    '& .MuiInput-root': {
      // "& fieldset": {
      borderColor: 'white',
      // },
      // "&:hover fieldset": {
      //   borderColor: "white",
      // },
      '&.Mui-focused': {
        borderColor: '#fcc652',
        // color: '#fcc652',
        // backgroundColor:'black'
      },
    },
  },
})(TextField);

export default function ContactDataForm(props) {
  return (
    <div className={classes.RegisterForm}>
      <Grid>
        <Grid
          className={classes.grid1}
          style={{
            marginBottom: '10px',
          }}
          container
          spacing={3}
          // justifyContent="space-evenly"
        >
          <Grid item xs={12} sm={6}>
            <CssTextField
              required
              fullWidth
              id="firstname"
              type="text"
              label="First name"
              // variant="outlined"
              InputProps={{
                inputProps: {},
                style: {
                  fontFamily: '"Kanit", sans-serif',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CssTextField
              required
              fullWidth
              id="lastname"
              type="text"
              label="Last Name"
              // variant="outlined"
              InputProps={{
                inputProps: {},
                style: {
                  fontFamily: '"Kanit", sans-serif',
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid
          diection="row"
          spacing={3}
          container
          justifyContent="space-evenly"
          style={{ marginBottom: '10px' }}
        >
          <Grid item xs={12}>
            <CssTextField
              required
              fullWidth
              id="phone"
              type="tel"
              label="Your Number"
              // variant="outlined"
              InputProps={{
                inputProps: { minLength: 9, maxLength: 10 },
                style: {
                  fontFamily: '"Kanit", sans-serif',
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid
          diection="row"
          spacing={3}
          container
          justifyContent="space-evenly"
          style={{ marginBottom: '10px' }}
        >
          <Grid item xs={12}>
            <CssTextField
              required
              fullWidth
              id="email"
              type="email"
              label="Your Email"
              // variant="outlined"
              InputProps={{
                style: {
                  fontFamily: '"Kanit", sans-serif',
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid
          diection="row"
          spacing={3}
          container
          justifyContent="space-evenly"
          style={{ marginBottom: '10px' }}
        >
          <Grid item xs={12}>
            <CssTextField
              required
              fullWidth
              multiline
              rows={10}
              id="message"
              type="text"
              label="Enter your message"
              // variant="outlined"
              InputProps={{
                inputProps: {},
                style: {
                  fontFamily: '"Kanit", sans-serif',
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        diection="row"
        spacing={3}
        container
        justifyContent="space-evenly"
        style={{ marginBottom: '10px' }}
      >
        <Button
          variant="contained"
          color="default"
          style={{
            // fontFamily: '"Kanit", sans-serif',
            fontWeight: 700,
            color: 'white',
            background: 'linear-gradient(45deg, #FE6B8B  30%, #FF8E53  90%)',
          }}
          type="submit"
        >
          Submit
        </Button>
      </Grid>
    </div>
  );
}
