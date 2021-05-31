import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles';

const About = ({}) => {
  const classes = useSelector((state) => state.classes);
  const styleClasses = useStyles();

  return (
      <Typography>
          About Page
      </Typography>
  );
};

export default About;