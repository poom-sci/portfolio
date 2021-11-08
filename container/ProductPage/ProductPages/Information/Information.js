import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Card, colors, createTheme } from '@material-ui/core';

import FlagIcon from '@material-ui/icons/Flag';
import FaceIcon from '@material-ui/icons/Face';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

import classes from './Information.module.css';

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
      <h2>COMING SOON</h2>
    </div>
  );
}
