import { Typography } from '@material-ui/core';
import Link from 'next/link';

import { Paper, Grid } from '@material-ui/core';

import classes from './ProjectCards.module.css';

function ProductCards(props) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography style={{ fontWeight: 700, marginTop: '20px' }} variant="h4" component="h2">
          My Experiences
        </Typography>
      </div>

      <Grid className={classes.context} container>
        <Grid item xs={12} sm={6}>
          <Link href="/project/nlp">
            <Paper className={classes.paper}>
              <Typography
                align="center"
                className={classes.cardTitle}
                style={{ color: 'black' }}
                variant="h4"
                component="h3"
              >
                Natural Language Processing
              </Typography>
              <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bert-and-ernie-gettyimages-1039579634.jpg?crop=1.00xw:0.754xh;0,0.0440xh&resize=480:*" />
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link href="/project/pomelo">
            <Paper className={classes.paper}>
              <Typography
                align="center"
                className={classes.cardTitle}
                style={{ color: 'white' }}
                variant="h4"
                component="h3"
              >
                Pomelo Fashion Internship
              </Typography>
              <img src="/page/home/pomelo-cover.jpg" />
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link href="/project/depressionApp">
            <Paper className={classes.paper}>
              <Typography
                align="center"
                className={classes.cardTitle}
                style={{ color: 'white' }}
                variant="h4"
                component="h3"
              >
                Data Mind: Depression Application
              </Typography>
              <img src="/page/home/depression-cover.jpg" />
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link href="/project/burgerApp">
            <Paper className={classes.paper}>
              <Typography align="center" className={classes.cardTitle} variant="h4" component="h3">
                Burger Web Application
              </Typography>
              <img src="/page/home/burger-cover.jpg" />
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link href="/project/treason">
            <Paper className={classes.paper}>
              <Typography align="center" className={classes.cardTitle} variant="h4" component="h3">
                2Dimension Games TREASON
              </Typography>
              <img src="/page/home/game-cover.jpg" />
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link href="/project/clockDrawing">
            <Paper className={classes.paper}>
              <Typography align="center" className={classes.cardTitle} variant="h4" component="h3">
                Clock Drawing Analysis
              </Typography>
              <img src="/page/home/clock-cover.jpg" />
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductCards;
