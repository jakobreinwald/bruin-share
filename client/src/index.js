import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffb81c',
        },
        secondary: {
            main: '#8bb8e8',
        },
        info: {
            main: '#ffd9e0',
        },
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider> 
    </ThemeProvider>,
    document.getElementById('root')
);