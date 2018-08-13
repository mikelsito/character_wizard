import React, { Component } from 'react';
import Card from 'components/Build/Card';
import {Stage1, Stage2} from 'components/Stages'

import './BuildRight.css';

// import object
// import * as races from 'external/5eAPI/races';

console.log(Stage1.races);

class BuildRight extends Component {
    
    render() {
        return (
            <div className="BuildRight">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <Card click={this.props.findSpecificRace} />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuildRight;