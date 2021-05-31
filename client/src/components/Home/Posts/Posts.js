import React from 'react';
import { CircularProgress, Divider, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId, currentSubject, currentClass, currentQuarter }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  if(!currentSubject || !currentClass || !currentQuarter) {
    return null;
  }
  return (
    !posts.length ? 
    <div style={{ padding: 15 }}>
      <CircularProgress /> 
    </div>
    : (
      <>
        <div style={{ padding: 15 }}>
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={6} md={3}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
        </div>
        <Divider />
      </>
    )
  );
};

export default Posts;