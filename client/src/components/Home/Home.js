import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Divider, AppBar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getSubjects, searchForPosts, getPosts } from '../../actions/posts';
import ChipInput from 'material-ui-chip-input';

import Subjects from '../Subjects/Subjects'
import Search from './Search'
import Posts from '../Posts/Posts';
import useStyles from '../../styles'
import useStyles2 from './styles';

const Home = ({ currentId, setCurrentId }) => {
 
    const [currentSubject, setCurrentSubject] = useState(0)
    const [currentClass, setCurrentClass] = useState(0)
    const [currentQuarter, setCurrentQuarter] = useState(0)
    const [searchUsed, setSearchUsed] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch();
    const classes2 = useStyles2();
    const [tags, setTags] = useState([]);

    useEffect(() => {
        dispatch(getSubjects());
    }, [dispatch]);
    /* useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]); */

    const searchPost = () => {
        if (tags.length !== 0) {
            setSearchUsed(true);
            setCurrentSubject(".");
            setCurrentClass(".");
            setCurrentQuarter(".");
            dispatch(searchForPosts(tags.join(',')));
        } else {
            alert("Input some concepts to start searching.");
        }
    };

    const handleAdd = (tag) => setTags([...tags, tag]);
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    return (
        <Grow in>
            <Container> 
                <Grid item xs={12} md={12}>
                    <AppBar className={classes2.appBarSearch} position="static" color="inherit">
                        <ChipInput
                            style={{ margin: '10px 0' }}
                            value={tags}
                            onAdd={(tag) => handleAdd(tag)}
                            onDelete={(tag) => handleDelete(tag)}
                            label="Search for Concepts"
                            variant="outlined"
                        />
                        <Button onClick={searchPost} className={classes2.searchButton} variant="contained" color="primary">Search</Button>
                    </AppBar> 
                </Grid>
                <p></p>
                <div style={{ padding: 15 }}>
                    <Subjects currentSubject={currentSubject} setCurrentSubject={setCurrentSubject}
                        currentClass={currentClass} setCurrentClass={setCurrentClass}
                        currentQuarter={currentQuarter} setCurrentQuarter={setCurrentQuarter}
                        setSearchUsed={setSearchUsed}/>
                </div>
                <Divider />
                <Search searchUsed={searchUsed} currentSubject={currentSubject} currentClass={currentClass} currentQuarter={currentQuarter} setCurrentClass={setCurrentClass} setCurrentQuarter={setCurrentQuarter}/>
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