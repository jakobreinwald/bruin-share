import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Quarter from './Quarter/Quarter';
import useStyles from './styles';

const Quarters = ({ currentSubject, currentClass, currentQuarter, setCurrentQuarter }) => {
  const quarters = useSelector((state) => state.quarters);
  const classes = useStyles();

  if(!currentSubject) {
    return null;
  }
  if(!currentClass) {
    return null;
  }
  return (
    !quarters.length ? <CircularProgress /> : (
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
        {quarters.map((oneQuarter) => (
          <Grid key={oneQuarter} item xs={12} sm={6} md={2}>
            <Quarter oneQuarter={oneQuarter} currentSubject={currentSubject} currentClass={currentClass} currentQuarter={currentQuarter} setCurrentQuarter={setCurrentQuarter}/>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Quarters;