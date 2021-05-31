import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import bruinLogo from '../../images/bruinlogo.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} variant="h2">
                    Bruin Share
                </Typography>
                <img className={classes.image} src={bruinLogo} alt="bruinLogo" height="60"/>
            </div>
            <Toolbar className={classes.Toolbar}>
                <Button component={Link} width="60px" to="/about" color="secondary">About</Button>
                <Button className={classes.createPostButton} component={Link} to="/form" color="secondary">Create a Post</Button>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.username} variant="h6">
                            {user.result.name}
                        </Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                    ) : (
                        <Button component={Link} to="/auth" color="secondary">Sign In</Button>
                    )
                }
            </Toolbar>
        </AppBar>
    );
};


export default Navbar;