import React, { Component } from 'react';
import races from 'external/5eAPI/races';
import { findSpecificRace, findAllRaces} from 'external/5eAPI/queries';
import BuildLeft from 'components/Build/BuildLeft';
import BuildRight from 'components/Build/BuildRight';

class Stage1 extends Component {

    componentDidMount() {
        const raceList = [];
        findAllRaces();
        console.log(raceList);
    }

    render() {
        return (
            <div>
            <BuildLeft />
            {
                this.raceList ?
                <BuildRight raceList={this.raceList} />
                : null
            }
            </div>
        );
    }
}

export default Stage1;