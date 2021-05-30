import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Divider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getSubjects } from '../../actions/posts';

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
                <div style={{ padding: 15 }}>
                    <Subjects currentSubject={currentSubject} setCurrentSubject={setCurrentSubject} currentClass={currentClass}     setCurrentClass={setCurrentClass} currentQuarter={currentQuarter} setCurrentQuarter={setCurrentQuarter}/>
                </div>
                <Divider />
                <div style={{ padding: 15 }}>
                    <Classes currentSubject={currentSubject} currentClass={currentClass} setCurrentClass={setCurrentClass} setCurrentQuarter={setCurrentQuarter}/>
                </div>
                <Divider />
                <div style={{ padding: 15 }}>
                    <Quarters currentSubject={currentSubject} currentClass={currentClass} currentQuarter={currentQuarter} setCurrentQuarter={setCurrentQuarter}/>
                </div>
                <Divider />
                <div style={{ padding: 15 }}>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} currentSubject={currentSubject} currentClass={currentClass} currentQuarter={currentQuarter}/>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Grow>
    );
    
};


export default Home;