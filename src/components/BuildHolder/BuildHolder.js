import React, { Component } from 'react';
// import the sequence holder components
// import { HashRouter, Route } from 'react-router-dom';

import BuildRight from 'components/Build/BuildRight';
import BuildLeft from 'components/Build/BuildLeft';

import Stage1 from '../Stages/StageR';
import Stage2 from '../Stages/Stage2';

class BuildHolder extends Component {
    render() {
        return (
            <Stage1>
                <div className="sequence-holder">
                    <BuildLeft />
                    <BuildRight />
                </div>
            </Stage1>
        )
    }
}

export default BuildHolder;