import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { getSpecificPosts } from '../../../actions/posts';

import useStyles from './styles';

const Quarter = ({ oneQuarter, currentSubject, currentClass, setCurrentQuarter }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Button size="large" color="primary" onClick={() => {dispatch(getSpecificPosts(`${currentSubject}`, `${currentClass}`, `${oneQuarter}`)); setCurrentQuarter(oneQuarter)}}>{oneQuarter}</Button>
  );
};

export default Quarter;