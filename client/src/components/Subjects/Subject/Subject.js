import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { getClasses, clearPosts, clearQuarters } from '../../../actions/posts';

import useStyles from './styles';

const Subject = ({ subject, currentSubject, setCurrentSubject, setCurrentClass, setCurrentQuarter }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Button className={currentSubject === subject ? classes.clicked : classes.notClicked} size="large" color="primary" onClick={() => {
        dispatch(getClasses(subject)); 
        setCurrentSubject(subject); 
        setCurrentClass(0);
        setCurrentQuarter(0);
        dispatch(clearPosts()); 
        dispatch(clearQuarters());
      }}>{subject}</Button>
  );
};

export default Subject;