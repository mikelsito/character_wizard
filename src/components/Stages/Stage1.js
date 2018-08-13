import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchRaces } from 'state/actions'

import { BuildLeft, BuildRight } from 'components/Build'

class Stage2 extends Component {

    componentDidMount() {
        this.props.actions.fetchRaces();
    }

    render() {
        return (
            <div>
                <BuildLeft />
                {
                    this.props.allRaces ? 
                    <BuildRight raceList={this.props.allRaces} />
                    : null
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

const mapDisptachToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                fetchRaces
            },
            dispatch
        )
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Stage2);
