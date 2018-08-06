import React from 'react';
// import the sequence holder components
import { Route } from 'react-router-dom';

import Stage1 from '../Stages/Stage1';
import Stage2 from '../Stages/Stage2';

const BuildHolder = () => (
    <div className="sequence-holder grid-wrapper grid-wrapper--full">
            <Stage1 />
            <Stage2 />
    </div>
)

export default BuildHolder;