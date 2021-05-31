import React from 'react';
import { Container, Divider } from '@material-ui/core';

import Classes from '../Classes/Classes'
import Quarters from '../Quarters/Quarters'

const Search = ({searchUsed, currentSubject, currentClass, currentQuarter, setCurrentClass, setCurrentQuarter}) => {
    if (!searchUsed) {
        return (
            <Container>
                <div style={{ padding: 15 }}>
                    <Classes currentSubject={currentSubject} currentClass={currentClass} setCurrentClass={setCurrentClass} setCurrentQuarter={setCurrentQuarter}/>
                </div>
                <Divider />
                <div style={{ padding: 15 }}>
                    <Quarters currentSubject={currentSubject} currentClass={currentClass} currentQuarter={currentQuarter} setCurrentQuarter={setCurrentQuarter}/>
                </div>
                <Divider />
            </Container>
        );
    } else {
        return (
            <Container></Container>
        );
    }
}

export default Search;