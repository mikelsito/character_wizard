import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FETCH_RACES } from 'state/actions'

import races from 'external/5eAPI/races';
import { findSpecificRace, findAllRaces} from 'external/5eAPI/queries';

import BuildLeft from 'components/Build/BuildLeft';
import BuildRight from 'components/Build/BuildRight';

class Stage1 extends Component {

    componentDidMount() {
        this.props.actions.fetchRaces();
    }

    render() {
        return (
            <div>
                <BuildLeft />
                {
                    !this.props.allRaces ? null :
                    <BuildRight raceList={this.allRaces} />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allRaces: state.data.allRaces
    }
}

const mapDisptachToProps = state => {
    return {
        actions: bindActionCreators(
            {
                fetchRaces
            },
            dispatch
        )
    }
}

export default connect(mapDisptachToProps, mapStateToProps)(Stage1);
