import React, { Component } from 'react';

import classes from './TopicImage.module.css';
// import CoverImage from "../../assets/image/cover2.jpg";

class TopicImage extends Component {
  render() {
    return (
      <div className={classes.TopicCover}>
        <div className={classes.box}>
          <h1 className={classes.text}>{this.props.title}</h1>
        </div>

        <img className={classes.image} src={this.props.coverImage} alt={this.props.alt_text} />
      </div>
    );
  }
}
export default TopicImage;
