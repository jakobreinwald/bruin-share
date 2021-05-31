import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { getSpecificPosts } from '../../../../actions/posts';
import { clearPosts } from '../../../../actions/posts';
import useStyles from './styles';

const Quarter = ({ oneQuarter, currentSubject, currentClass, currentQuarter, setCurrentQuarter }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Button className={currentQuarter === oneQuarter ? classes.clicked : classes.notClicked} fullWidth='true' size="large" onClick={() => {  
          dispatch(getSpecificPosts(`${currentSubject}`, `${currentClass}`, `${oneQuarter}`)); 
          setCurrentQuarter(oneQuarter)
          dispatch(clearPosts());
        }}>{oneQuarter}</Button>
  );
};

export default Quarter;