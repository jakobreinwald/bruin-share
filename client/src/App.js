import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
                <Route path="/about" exact component={About} />
                <Route path="/form" exact component={() => <Form currentId={currentId} setCurrentId={setCurrentId} />}/>
                <Route path="/auth" exact component={Auth} />
            </Switch>
        </Container>
    </BrowserRouter>
    );
};

export default App;
