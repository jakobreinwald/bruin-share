import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import { getPosts, getSubjectPosts, getSubjects } from './actions/posts';
// import Posts from './components/Posts/Posts'
// import Subjects from './components/Subjects/Subjects'
// import Classes from './components/Classes/Classes'
// import Quarters from './components/Quarters/Quarters'
// import Form from './components/Form/Form'
// import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Form from './components/Form/Form';
import About from './components/About/About';

const App = () => {
    const [currentId, setCurrentId] = useState(0)
    return (
    <BrowserRouter>
        <Container maxwidth="lg">
            <Navbar />
            <Switch>
                <Route path="/" exact component={() => <Home currentId={currentId} setCurrentId={setCurrentId} />} />
                <Route path="/auth" exact component={Auth} />
                <Route path="/form" exact component={() => <Form currentId={currentId} setCurrentId={setCurrentId} />}/>
                <Route path="/about" exact component={About} />
            </Switch>
        </Container>
    </BrowserRouter>
    );
};

export default App;

{/* <Grid item xs={12} sm={4}>
    <Form currentId={currentId} setCurrentId={setCurrentId} />
</Grid> */}