import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Quarter from './Quarter/Quarter';
import useStyles from './styles';

const Quarters = ({ currentSubject, currentClass }) => {
  const quarters = useSelector((state) => state.quarters);
  const classes = useStyles();

  return (
    !quarters.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {quarters.map((oneQuarter) => (
          <Grid key={oneQuarter} item xs={12} sm={6} md={3}>
            <Quarter oneQuarter={oneQuarter} currentSubject={currentSubject} currentClass={currentClass} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Quarters;