import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Subject from './Subject/Subject';
import useStyles from './styles';

const Subjects = ({ currentSubject, setCurrentSubject, setCurrentClass, setCurrentQuarter }) => {
  const subjects = useSelector((state) => state.subjects);
  const classes = useStyles();

  return (
    !subjects.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {subjects.map((subject) => (
          <Grid key={subject} item xs={12} sm={6} md={2}>
            <Subject subject={subject} currentSubject={currentSubject} setCurrentSubject={setCurrentSubject} setCurrentClass={setCurrentClass} setCurrentQuarter={setCurrentQuarter}/>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Subjects;