import React, { Component } from 'react';
// import the sequence holder components
import { HashRouter, Route } from 'react-router-dom';

import BuildRight from 'components/Build/BuildRight';
import BuildLeft from 'components/Build/BuildLeft';

import Stage1 from '../Stages/Stage1';
import Stage2 from '../Stages/Stage2';

class BuildHolder extends Component {
    render() {
        return (
            <HashRouter>
                <div className="sequence-holder">
                    <BuildLeft />
                    <BuildRight />
                    {/* <Route path="/stage1" component={Stage1}></Route>
                    <Route path="/stage2" component={Stage2}></Route> */}
                </div>
            </HashRouter>
        )
    }
}

export default BuildHolder;