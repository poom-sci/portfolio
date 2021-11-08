import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import classes from './Footer.module.css';
import FooterSocial from './FooterSocial/FooterSocial';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class Footer extends Component {
  // state = {
  //   columnData1: {
  //     data: {
  //       data1: {
  //         // link: "/",
  //         text: "ที่อยู่",
  //       },
  //       data2: {
  //         // link: "/",
  //         text:
  //           "220/1 หมู่ 4 ถ.แจ้งวัฒนะ ต.ปากเกร็ด อ.ปากเกร็ด จ.นนทบุรี 11120",
  //       },
  //     },
  //   },
  //   columnData2: {
  //     data: {
  //       data1: {
  //         // link: "/",
  //         text: "ติดต่อ",
  //       },
  //       data2: {
  //         // link: "/",
  //         text: "081-343-4433 (คุณวิชัย)",
  //       },
  //     },
  //   },
  //   columnData3: {

  //     data: {
  //       data1: {
  //         // link: "/",
  //         text: "เวลาเปิด-ปิด",
  //       },
  //       data2: {
  //         // link: "/",
  //         text: "ทุกวัน 8:00 - 16:00 ",
  //       },
  //     },
  //   },
  // };

  render() {
    // const classes = useStyles();
    return (
      <footer className={classes.Footer}>
        <Grid container spacing={1} className={classes.Grid} alignItems="center">
          {/* <Grid container xs={4} sm={4} direction="column" alignItems="center" justify="center">
            <Typography variant="h6" component="h5">
              Address
            </Typography>
            <br />
            <Typography variant="body2" className={classes.FooterText}>
              220/1 หมู่ 4 ถ.แจ้งวัฒนะ ต.ปากเกร็ด อ.ปากเกร็ด จ.นนทบุรี 11120
            </Typography>
          </Grid>
          <Grid container xs={4} sm={4} direction="column" alignItems="center" justify="center">
            <Typography variant="h6" component="h5" className={classes.FooterText}>
              Phone
            </Typography>
            <br />
            <Typography variant="body1" className={classes.FooterText}>
              081-343-4433 (คุณวิชัย)
            </Typography>
          </Grid> */}
          <Grid
            container
            // align="center"
            direction="column"
            // alignItems="center"

            justifyContent="center"
          >
            <Typography variant="h6" component="h5" className={classes.FooterText}>
              Contacts
            </Typography>
            <FooterSocial key="FooterSocial"></FooterSocial>
          </Grid>
          <Grid
            style={{ margin: '30px 0 0 0' }}
            item
            xs={12}
            align="center"
            // alignItems="center"
            // justifyContent="center"
          >
            <Typography className={classes.FooterText}>COPYRIGHT © 2020. ALL RIGHTS RESERVED.</Typography>
          </Grid>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
