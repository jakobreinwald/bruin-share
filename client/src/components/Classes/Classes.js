import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Class from './Class/Class';
import useStyles from './styles';

const Classes = ({ currentSubject, setCurrentClass }) => {
  const classes = useSelector((state) => state.classes);
  const styleClasses = useStyles();

  return (
    !classes.length ? null : (
      <Grid className={styleClasses.container} container alignItems="stretch" spacing={3}>
        {classes.map((oneClass) => (
          <Grid key={oneClass} item xs={12} sm={6} md={3}>
            <Class oneClass={oneClass} currentSubject={currentSubject} setCurrentClass={setCurrentClass} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Classes;