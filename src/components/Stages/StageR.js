import React, { Component } from 'react';
import races from 'external/5eAPI/races';
import { findSpecificRace, findAllRaces} from 'external/5eAPI/queries';

class Stage1 extends Component {

    render() {
        return (
            <div>
            {this.props.children}
            </div>
        );
    }
}

export default Stage1;