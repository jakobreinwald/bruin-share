import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts, getSubjectPosts, getSubjects } from './actions/posts';
import Posts from './components/Posts/Posts'
import Subjects from './components/Subjects/Subjects'
import Classes from './components/Classes/Classes'
import Quarters from './components/Quarters/Quarters'
import Form from './components/Form/Form'
import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    const [currentId, setCurrentId] = useState(0)
    const [currentSubject, setCurrentSubject] = useState(0)
    const [currentClass, setCurrentClass] = useState(0)
    const classes = useStyles();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getSubjects());
    }, [dispatch]);
    /* useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]); */

    return (
        <Container maxwidth="lg">
            <Navbar />
            <Grow in>
                <Container> 
                    <Subjects setCurrentSubject={setCurrentSubject} />
                    <Classes currentSubject={currentSubject} setCurrentClass={setCurrentClass} />
                    <Quarters currentSubject={currentSubject} currentClass={currentClass} />


                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;

{/* <Grid item xs={12} sm={4}>
    <Form currentId={currentId} setCurrentId={setCurrentId} />
</Grid> */}