import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, getSubjectPosts, getSubjects } from '../../actions/posts';
import {useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import Subjects from '../Subjects/Subjects'
import Classes from '../Classes/Classes'
import Quarters from '../Quarters/Quarters'
import Posts from '../Posts/Posts';
import useStyles from '../../styles'
import useStyles2 from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = ({ currentId, setCurrentId }) => {
 
    const [currentSubject, setCurrentSubject] = useState(0)
    const [currentClass, setCurrentClass] = useState(0)
    const [currentQuarter, setCurrentQuarter] = useState(0)
    const classes = useStyles();
    const dispatch = useDispatch();

    const query = useQuery();
    const history = useHistory();
    const searchQuery = query.get('searchQuery');
    const classes2 = useStyles2();
    const [search, setSearch] = useState('');
    const [concepts, setConcepts] = useState([]);

    useEffect(() => {
        dispatch(getSubjects());
    }, [dispatch]);
    /* useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]); */

    const handleAdd = (concept) => setConcepts([...concepts, concept]);
    const handleDelete = (conceptToDelete) => setConcepts(concepts.filter((concept) => concept !== conceptToDelete));

    return (
        <Grow in>
            <Container> 
                <Grid item xs={12} md={12}>
                    <AppBar classname={classes2.appBarSearch} position="static" color="inherit">
                        <ChipInput
                            style={{ margin: '10px 10px' }}
                            value={concepts}
                            onAdd={handleAdd}
                            onDelete={handleDelete}
                            label="Search Concepts"
                            variant="outlined"
                        />
                        <Button variant="contained" color="primary">Search</Button>
                    </AppBar> 
                </Grid>
                <p></p>
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