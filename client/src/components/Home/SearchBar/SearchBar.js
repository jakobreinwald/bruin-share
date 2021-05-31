import React from 'react';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { AppBar, Button, Divider, Grid } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';

import { searchForPosts } from '../../../actions/posts';

const SearchBar = ({ tags, setTags, setSearchUsed, setCurrentSubject, setCurrentClass, setCurrentQuarter }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const searchPost = () => {
        if (tags.length !== 0) {
            setSearchUsed(true);
            setCurrentSubject(".");
            setCurrentClass(".");
            setCurrentQuarter(".");
            dispatch(searchForPosts(tags.join(',')));
        } 
        else {
            alert("Input some concepts to start searching.");
        }
    };

    const handleAdd = (tag, setTags) => setTags([...tags, tag]);
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    return (
        <>
            <Grid item xs={12} md={12}>
                <AppBar className={classes.appBarSearch} position="static" color="inherit">
                    <ChipInput
                        style={{ margin: '10px 0' }}
                        value={tags}
                        onAdd={(tag) => handleAdd(tag, setTags)}
                        onDelete={(tag) => handleDelete(tag)}
                        label="Search for Concepts"
                        variant="outlined"
                    />
                    <Button className={classes.searchButton} variant="contained" color="primary" onClick={searchPost}>Search</Button>
                </AppBar> 
            </Grid>
            <Divider />
        </>
    );
};

export default SearchBar;