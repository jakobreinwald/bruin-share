import React from 'react';
import { CircularProgress, Divider, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Class from './Class/Class';
import useStyles from './styles';

const Classes = ({ searchUsed, currentSubject, currentClass, setCurrentClass, setCurrentQuarter }) => {
  const classes = useSelector((state) => state.classes);
  const styleClasses = useStyles();

  if (!currentSubject || searchUsed) {
    return null;
  }
  return (
    !classes.length ? 
    <div style={{ padding: 15 }}>
      <CircularProgress /> 
    </div>
    : (
      <>
        <div style={{ padding: 15 }}>
          <Grid className={styleClasses.mainContainer} container alignItems="stretch" spacing={3}>
            {classes.map((oneClass) => (
              <Grid key={oneClass} item xs={12} sm={6} md={2}>
                <Class oneClass={oneClass} currentSubject={currentSubject} currentClass={currentClass} setCurrentClass={setCurrentClass} setCurrentQuarter={setCurrentQuarter}/>
              </Grid>
            ))}
          </Grid>
        </div>
        <Divider />
      </>
    )
  );
};

export default Classes;