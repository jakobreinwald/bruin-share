import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, getSubjectPosts, getSubjects } from '../../actions/posts';

import Subjects from '../Subjects/Subjects'
import Classes from '../Classes/Classes'
import Quarters from '../Quarters/Quarters'
import Posts from '../Posts/Posts';
import useStyles from '../../styles'

const Home = ({ currentId, setCurrentId }) => {
 
    const [currentSubject, setCurrentSubject] = useState(0)
    const [currentClass, setCurrentClass] = useState(0)
    const [currentQuarter, setCurrentQuarter] = useState(0)
    const classes = useStyles();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getSubjects());
    }, [dispatch]);
    /* useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]); */

    return (
        <Grow in>
            <Container> 
                <Subjects setCurrentSubject={setCurrentSubject} setCurrentClass={setCurrentClass} setCurrentQuarter={setCurrentQuarter}/>
                <Classes currentSubject={currentSubject} setCurrentClass={setCurrentClass} setCurrentQuarter={setCurrentQuarter}/>
                <Quarters currentSubject={currentSubject} currentClass={currentClass} setCurrentQuarter={setCurrentQuarter}/>


                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} currentSubject={currentSubject} currentClass={currentClass} currentQuarter={currentQuarter}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
    
};


export default Home;