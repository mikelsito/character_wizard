import React, { Component } from 'react';
import Card from 'components/Build/Card';
import {Stage1, Stage2} from 'components/Stages'

import './BuildRight.css';

class BuildRight extends Component {

    componentDidMount() {
        // console.log('BuildRight raceList: ', this.props.raceList);
    }
    
    render() {
        return (
            <div className="BuildRight">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            {
                                this.props.raceList ?
                                this.props.raceList.map((race, index) => {
                                    return <Card key={index} race={race.string} />
                                }) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuildRight;