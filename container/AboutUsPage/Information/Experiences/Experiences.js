import React from 'react';

import { Typography, Divider, Paper, Card } from '@material-ui/core';

import classes from './Experiences.module.css';

export default function Education() {
  // const classes = useStyles();

  return (
    <div className={classes.Container}>
      <Typography align="left" style={{ fontWeight: 700, marginTop: '20px' }} variant="h4" component="h3">
        Personal History
      </Typography>
      <Paper elevation={10} className={classes.Card}>
        <img src="/page/aboutMe/experiences1.jpg" alt="profile image" />
        <div className={[classes.subtitle, classes.right].join(' ')}>
          <Typography
            align="justify"
            style={{ fontWeight: 700, fontSize: '26px', textShadow: '2px 2px 2px rgba(0,0,0,0.3)' }}
          >
            Poom Suchao-in
          </Typography>
          <Typography
            align="left"
            variant="body1"
            style={{
              fontSize: '18px',
              textShadow: '2px 2px 2px rgba(0,0,0,0.3)',
            }}
          >
            <b>Infomation</b>
            <br />
            Date of birth : June 2,2001
            <br />
            Nationality : Thai
            <br />
            Religion : Buddhist
            <br />
            Status : Single
          </Typography>
        </div>
      </Paper>
      <Paper className={classes.Card}>
        <img src="/page/aboutMe/experiences2.jpg" alt="experiences in photography" />
        <div className={[classes.subtitle, classes.left].join(' ')}>
          <Typography
            align="justify"
            style={{ fontWeight: 700, fontSize: '26px', textShadow: '2px 2px 2px rgba(0,0,0,0.3)' }}
          >
            Programming
          </Typography>
          <Typography
            align="left"
            variant="body1"
            style={{
              fontSize: '18px',
              textShadow: '2px 2px 2px rgba(0,0,0,0.3)',
            }}
          >
            Language
            <br />- Java
            <br />- Python
            <br />- JavaScript
            <br />- C/ C++
            <br />- HTML/CSS
            <br />- Dart (Beginner)
            <br />- SQL / Mongodb
            <br />- Kotlin
            <Card style={{ color: 'white', height: '2px', margin: '10px 0' }} />
            Framework
            <br />- React.js
            <br />- Flutter (Beginner)
            <br />- Node.js - Express.js
            <br /> etc.
          </Typography>
        </div>
      </Paper>
      <Paper elevation={10} className={classes.Card}>
        <img src="/page/aboutMe/experiences3.jpg" alt="experiences in tutoring" />
        <div className={[classes.subtitle, classes.right].join(' ')}>
          <Typography
            align="justify"
            style={{ fontWeight: 700, fontSize: '26px', textShadow: '2px 2px 2px rgba(0,0,0,0.3)' }}
          >
            Tutoring
          </Typography>
          <Typography
            align="left"
            variant="body1"
            style={{
              fontSize: '18px',
              textShadow: '2px 2px 2px rgba(0,0,0,0.3)',
            }}
          >
            Award
            <br />- PAT1 244/300
            <br />- PAT3 262/300
            <br />- 9 วิชาสามัญ ฟิสิกส์ 84
            <br />- 9 วิชาสามัญ ฟิสิกส์ 96
            {/* <Card style={{ color: 'white', height: '2px', margin: '10px 0' }} />
            Framework
            <br />- React.js
            <br />- Flutter (Beginner)
            <br />- Node.js - Express.js
            <br /> etc. */}
          </Typography>
        </div>
      </Paper>
      <Paper elevation={10} className={classes.Card}>
        <img src="/page/aboutMe/experiences4.jpg" alt="experiences in programing" />
        <div className={[classes.subtitle, classes.left].join(' ')}>
          <Typography
            align="justify"
            style={{ fontWeight: 700, fontSize: '26px', textShadow: '2px 2px 2px rgba(0,0,0,0.3)' }}
          >
            Photography
          </Typography>
          <Typography
            align="left"
            variant="body1"
            style={{
              fontSize: '18px',
              textShadow: '2px 2px 2px rgba(0,0,0,0.3)',
            }}
          >
            Member of Cu Photo Club
            <br />- Canon EOS Rp
            <br />- Canon AE-1
            <Card style={{ color: 'white', height: '2px', margin: '10px 0' }} />
            Skill
            <br />- Adobe Photoshop
            <br />- Adobe Lightroom
            <br />- Adobe Illustrator
            <br />- Adobe Premiere Pro (Beginner)
          </Typography>
        </div>
      </Paper>
      <Paper elevation={10} className={classes.Card}>
        <img src="/page/aboutMe/experiences5.jpg" alt="others experiences" />{' '}
        <div className={[classes.subtitle, classes.right].join(' ')}>
          <Typography
            align="justify"
            style={{ fontWeight: 700, fontSize: '26px', textShadow: '2px 2px 2px rgba(0,0,0,0.3)' }}
          >
            Others Skills
          </Typography>
          <Typography
            align="left"
            variant="body1"
            style={{
              fontSize: '18px',
              textShadow: '2px 2px 2px rgba(0,0,0,0.3)',
            }}
          >
            tools
            <br />- figma (Beginner)
            <br />- Eclipse
            <br />- Firebase
            <br />- Excel/Google Sheet
            <br />- basic in machine learning
            <br />- knn, svm, linear regression, cnn
            <br />- stack Overflow Searcher
            <Paper style={{ color: 'white', height: '2px', margin: '10px 0' }} />
            languages
            <br />- Thai
            <br />- English
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
