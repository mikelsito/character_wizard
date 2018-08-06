import React from 'react';
// import the sequence holder components
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Stage1 from '../Stages/Stage1';
import Stage2 from '../Stages/Stage2';

const BuildHolder = () => (
    <BrowserRouter>
    <div className="sequence-holder grid-wrapper grid-wrapper--full">
            <Stage1 />
            <Route path="/stage2" component={Stage2}>
                <Stage2 />
            </Route>
    </div>
    </BrowserRouter>
)

export default BuildHolder;