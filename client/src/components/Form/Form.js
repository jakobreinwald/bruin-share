import React, { useEffect, useState } from 'react';
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '', subjectId: '', classId: '', year: '', quarter: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '', subjectId: '', classId: '', year: '', quarter: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (postData.subjectId === "" || postData.classId === "" || postData.year === "" || postData.quarter === "") {
      alert("Please fill out the subject, class, year and quarter.");
    } else if (postData.selectedFile === "") {
      alert("Please choose a file to upload.");
    } else if (!postData.selectedFile.startsWith("data:application/pdf")) {
      alert("Selected file must be a PDF.");
    } else if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if(!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to share your notes and like other students' notes.
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.creator}"` : 'Share Your Notes'}</Typography>
        {/* <TextField name="creator" variant="outlined" label="Uploader" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} /> */}
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Comments" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Featured Concepts (comma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <TextField name="title" variant="outlined" label="Subject" fullWidth value={postData.subjectId} onChange={(e) => setPostData({ ...postData, subjectId: e.target.value })} />
        <TextField name="title" variant="outlined" label="Class" fullWidth value={postData.classId} onChange={(e) => setPostData({ ...postData, classId: e.target.value })} />
        <TextField name="title" variant="outlined" label="Year" fullWidth value={postData.year} onChange={(e) => setPostData({ ...postData, year: e.target.value })} />
        <TextField name="title" variant="outlined" label="Quarter" fullWidth value={postData.quarter} onChange={(e) => setPostData({ ...postData, quarter: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;