import React from 'react';
// import the sequence holder components
import { HashRouter, Route } from 'react-router-dom';

import Stage1 from '../Stages/Stage1';
import Stage2 from '../Stages/Stage2';

const nextStage = (stage) => {
    window.location.hash = "/" + stage;
}

const BuildHolder = () => (
    <HashRouter>
    <div className="sequence-holder grid-wrapper grid-wrapper--full">
            <Route path="/stage1" component={Stage1}></Route>
            <Route path="/stage2" component={Stage2}></Route>
    </div>
    </HashRouter>
)

export default BuildHolder;