import React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core';

import memories from '../../images/bruinlogo.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    const user = null;

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} variant="h2">
                    Bruin Share
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </div>
            <Toolbar className={classes.Toolbar}>
                <Button component={Link} to="/form" color="primary">Create a Post</Button>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.username} variant="h6">
                            {user.result.name}
                        </Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                    ) : (
                        <Button component={Link} to="/auth" color="primary">Sign In</Button>
                    )
                }
            </Toolbar>
        </AppBar>
    );
};


export default Navbar;