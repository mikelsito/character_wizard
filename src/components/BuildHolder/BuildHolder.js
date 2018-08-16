import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Stage1, Stage2 } from 'components/Stages';
import { OptLanguage } from 'components/Opt';

class BuildHolder extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Stage1}/>
                <Route path="/optlanguage" component={OptLanguage}/>
                <Route path="/stage2" component={Stage2}/>
            </div>
        )
    }
}

export default BuildHolder; 