import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// import { Card, colors, createTheme } from '@material-ui/core';

import FlagIcon from '@material-ui/icons/Flag';
import FaceIcon from '@material-ui/icons/Face';

import classes from './Education.module.css';

export default function Education() {
  // const classes = useStyles();

  return (
    <div className={classes.Information}>
      <Typography align="left" style={{ fontWeight: 700, marginTop: '30px' }} variant="h4" component="h3">
        Education
      </Typography>
      <Timeline align="alternate" className={classes.Education}>
        <TimelineItem padding={12}>
          <TimelineOppositeContent>
            <Typography variant="body1" color="textPrimary">
              2008 - 2019
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="inherit">
              <FlagIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper align="center" elevation={3} className={classes.paper}>
              <img src="/page/aboutMe/education1.jpg" alt="Saint Gabriel's College Logo" />
              <Typography variant="h6" component="h1">
                High School
              </Typography>
              <Typography>Mathematics-Science Programme, Saint Gabriel's College, GPAX 3.77</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body1" color="textPrimary">
              2019 - Now
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="inherit">
              <FaceIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper align="center" elevation={3} className={classes.paper}>
              <img src="/page/aboutMe/education2.jpg" alt="Chulalongkorn University Logo" />
              <Typography variant="h6" component="h1">
                University
              </Typography>
              <Typography>Computer Engineering, Chulalongkorn University, GPAX 3.82</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
