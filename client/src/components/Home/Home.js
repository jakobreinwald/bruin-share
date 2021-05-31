import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getSubjects } from '../../actions/posts';

import SearchBar from './SearchBar/SearchBar';
import Subjects from './Subjects/Subjects';
import Classes from './Classes/Classes';
import Quarters from './Quarters/Quarters';
import Posts from './Posts/Posts';
import useStyles from './styles';

const Home = ({ currentId, setCurrentId }) => {
 
    const [currentSubject, setCurrentSubject] = useState(0);
    const [currentClass, setCurrentClass] = useState(0);
    const [currentQuarter, setCurrentQuarter] = useState(0);
    const [searchUsed, setSearchUsed] = useState(false);
    const [tags, setTags] = useState([]);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubjects());
    }, [dispatch]);

    return (
        <Grow in>
            <Container> 
                <SearchBar tags={tags} setTags={setTags} setSearchUsed={setSearchUsed} setCurrentSubject={setCurrentSubject} setCurrentClass={setCurrentClass} setCurrentQuarter={setCurrentQuarter} />

                <Subjects setSearchUsed={setSearchUsed} currentSubject={currentSubject} setCurrentSubject={setCurrentSubject} currentClass={currentClass} setCurrentClass={setCurrentClass} currentQuarter={currentQuarter} setCurrentQuarter={setCurrentQuarter} />
                <Classes searchUsed={searchUsed} currentSubject={currentSubject} currentClass={currentClass} setCurrentClass={setCurrentClass} setCurrentQuarter={setCurrentQuarter}/>
                <Quarters searchUsed={searchUsed} currentSubject={currentSubject} currentClass={currentClass} currentQuarter={currentQuarter} setCurrentQuarter={setCurrentQuarter}/>

                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12}>
                        <Posts setCurrentId={setCurrentId} currentSubject={currentSubject} currentClass={currentClass} currentQuarter={currentQuarter}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;