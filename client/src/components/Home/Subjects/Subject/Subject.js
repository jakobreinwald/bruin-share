import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { getClasses, clearPosts, clearQuarters } from '../../../../actions/posts';
import useStyles from './styles';

const Subject = ({ subject, currentSubject, setCurrentSubject, setCurrentClass, setCurrentQuarter, setSearchUsed }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Button className={currentSubject === subject ? classes.clicked : classes.notClicked} fullWidth='true' size="large" onClick={() => {
        dispatch(getClasses(subject));
        setSearchUsed(false); 
        setCurrentSubject(subject); 
        setCurrentClass(0);
        setCurrentQuarter(0);
        dispatch(clearPosts()); 
        dispatch(clearQuarters());
      }}>{subject}</Button>
  );
};

export default Subject;