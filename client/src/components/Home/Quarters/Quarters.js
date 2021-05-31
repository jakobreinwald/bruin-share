import React from 'react';
import { CircularProgress, Divider, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Quarter from './Quarter/Quarter';
import useStyles from './styles';

const Quarters = ({ searchUsed, currentSubject, currentClass, currentQuarter, setCurrentQuarter }) => {
  const quarters = useSelector((state) => state.quarters);
  const classes = useStyles();

  if(!currentSubject || !currentClass || searchUsed) {
    return null;
  }
  return (
    !quarters.length ? 
    <div style={{ padding: 15 }}>
      <CircularProgress /> 
    </div>
    : (
      <>
        <div style={{ padding: 15 }}>
          <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
            {quarters.map((oneQuarter) => (
              <Grid key={oneQuarter} item xs={12} sm={6} md={2}>
                <Quarter oneQuarter={oneQuarter} currentSubject={currentSubject} currentClass={currentClass} currentQuarter={currentQuarter} setCurrentQuarter={setCurrentQuarter}/>
              </Grid>
            ))}
          </Grid>
        </div>
        <Divider />
      </>
    )
  );
};

export default Quarters;