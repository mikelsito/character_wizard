import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Stage1, Stage2 } from 'components/Stages';

class BuildHolder extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Stage1}/>
                <Route path="/stage2" component={Stage2}/>

                {/* <Stage1 />
                <Stage2 /> */}
            </div>
        )
    }
}

export default BuildHolder;