import React from 'react';

import classes from './Spinner.module.css';

const spinner = () => {
  return (
    <div>
      <div className={classes.sk}>
        <div className={[classes.skc, classes.skc1].join(' ')}></div>
        <div className={[classes.skc, classes.skc2].join(' ')}></div>
        <div className={[classes.skc, classes.skc3].join(' ')}></div>
        <div className={[classes.skc, classes.skc4].join(' ')}></div>
        <div className={[classes.skc, classes.skc5].join(' ')}></div>
        <div className={[classes.skc, classes.skc6].join(' ')}></div>
        <div className={[classes.skc, classes.skc7].join(' ')}></div>
        <div className={[classes.skc, classes.skc8].join(' ')}></div>
        <div className={[classes.skc, classes.skc9].join(' ')}></div>
      </div>
    </div>
  );
};

export default spinner;
