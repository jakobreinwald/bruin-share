import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Class from './Class/Class';
import useStyles from './styles';

const Classes = ({ currentSubject, currentClass, setCurrentClass, setCurrentQuarter }) => {
  const classes = useSelector((state) => state.classes);
  const styleClasses = useStyles();

  if (!currentSubject) {
    return null;
  }
  return (
    !classes.length ? <CircularProgress/> : (
      <Grid className={styleClasses.container} container alignItems="stretch" spacing={3}>
        {classes.map((oneClass) => (
          <Grid key={oneClass} item xs={12} sm={6} md={2}>
            <Class oneClass={oneClass} currentSubject={currentSubject} currentClass={currentClass} setCurrentClass={setCurrentClass} setCurrentQuarter={setCurrentQuarter}/>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Classes;