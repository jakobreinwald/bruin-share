import React from 'react';
import { CircularProgress, Divider, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Subject from './Subject/Subject';
import useStyles from './styles';

const Subjects = ({ currentSubject, setCurrentSubject, setCurrentClass, setCurrentQuarter, setSearchUsed }) => {
  const subjects = useSelector((state) => state.subjects);
  const classes = useStyles();

  return (
    !subjects.length ? 
    <div style={{ padding: 15 }}>
      <CircularProgress /> 
    </div>
    : (
      <>
        <div style={{ padding: 15 }}>
          <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
            {subjects.map((subject) => (
              <Grid key={subject} item xs={12} sm={6} md={2}>
                <Subject subject={subject} currentSubject={currentSubject} setCurrentSubject={setCurrentSubject} setCurrentClass={setCurrentClass} setCurrentQuarter={setCurrentQuarter} setSearchUsed={setSearchUsed}/>
              </Grid>
            ))}
          </Grid>
        </div>
        <Divider />
      </>
    )
  );
};

export default Subjects;