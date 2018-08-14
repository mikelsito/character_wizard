import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchRaces, fetchRace } from 'state/actions'

import { BuildLeft, BuildRight } from 'components/Build'

class Stage1 extends Component {
    
    componentDidMount() {
        this.props.actions.fetchRaces();
    }

    render() {
        return (
            <div>
                <BuildLeft />
                {
<<<<<<< HEAD
                    !this.props.allRaces ? null :
                    <BuildRight selection={true} location="/stage2" list={this.props.allRaces} click={this.props.actions.fetchRace}/>
=======
                    this.props.allRaces ? 
<<<<<<< HEAD
                    <BuildRight selection={true} location="/stage2" list={this.props.allRaces} click={this.props.actions.fetchRace}/>
=======
                    <BuildRight selection={true}   previousLocation="/" location="/stage2" list={this.props.allRaces} />
>>>>>>> added previous button
                    : null
>>>>>>> added previous button
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