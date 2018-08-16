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
                <BuildLeft
                    description={this.props.alignmentDescription}
                    descriptionTwo={this.props.ageDescription}
                    race={this.props.race}
                    />
                {
                    !this.props.allRaces ? null :
                    <BuildRight
                        selection={true}
                        location={ !this.props.race ? "/stage1" : "/stage2" }
                        list={this.props.allRaces}
                        click={this.props.actions.fetchRace}
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allRaces: state.data.allRaces,
        race: state.character.race,
        alignmentDescription: state.character.alignmentDescription,
        ageDescription: state.character.ageDescription
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