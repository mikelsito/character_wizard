import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchRaces, fetchRace } from 'state/actions'

import { BuildLeft, BuildRight } from 'components/Build'

class Stage1 extends Component {
    
    componentDidMount() {
        this.props.actions.fetchRaces();
    }

    clickHandler(arg) {
        console.log("Number " + arg + " has been clicked!")
    }

    render() {
        return (
            <div>
                <BuildLeft />
                {
                    this.props.allRaces ? 
                    <BuildRight selection={true} location="/stage2" list={this.props.allRaces} click={this.props.actions.fetchRace}/>
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allRaces: state.data.allRaces,
        race: state.character.race
    }
}

const mapDisptachToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                fetchRaces,
                fetchRace
            },
            dispatch
        )
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Stage1);
