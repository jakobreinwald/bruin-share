import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { getQuarters, clearPosts } from '../../../actions/posts';

import useStyles from './styles';

const Class = ({ oneClass, currentSubject, setCurrentClass, setCurrentQuarter }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Button size="large" color="secondary" onClick={() => {
        dispatch(getQuarters(`${currentSubject}`, `${oneClass}`)); 
        setCurrentClass(oneClass);
        setCurrentQuarter(0); 
        dispatch(clearPosts());
      }}>{oneClass}</Button>
  );
};

export default Class;