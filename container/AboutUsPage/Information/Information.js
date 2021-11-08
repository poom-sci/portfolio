import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Timeline from '@material-ui/lab/Timeline';
// import TimelineItem from '@material-ui/lab/TimelineItem';
// import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// import TimelineConnector from '@material-ui/lab/TimelineConnector';
// import TimelineContent from '@material-ui/lab/TimelineContent';
// import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
// import TimelineDot from '@material-ui/lab/TimelineDot';
// import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';

// import { Card, colors, createTheme } from '@material-ui/core';

// import FlagIcon from '@material-ui/icons/Flag';

// import Card from '@material-ui/core/Card';

import classes from './Information.module.css';

import Education from './Education/Education';
import Experiences from './Experiences/Experiences';
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: '6px 16px',
//   },
//   secondaryTail: {
//     backgroundColor: theme.palette.secondary.main,
//   },
// }));

export default function CustomizedTimeline() {
  // const classes = useStyles();

  return (
    <div className={classes.Information}>
      <Experiences />
      <Divider />
      <Education />
    </div>
  );
}
