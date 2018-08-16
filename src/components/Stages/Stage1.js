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
                    descriptionThree={this.props.lanuageDescription}
                    title={this.props.race}
                    />
                {
                    !this.props.allRaces ? null :
                    <BuildRight
                        selection={true}
                        location={ 
                            !this.props.race ? "/stage1" : 
                            this.props.languageOptions ? "/optlanguage" :
                            "/stage2" 
                        }
                        previousLocation={ '/stage1' }
                        list={this.props.allRaces}
                        click={this.props.actions.fetchRace}
                        disabled={!this.props.race ? true : false}
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
        lanuageDescription: state.data.languageDescription,
        alignmentDescription: state.data.alignmentDescription,
        ageDescription: state.data.ageDescription,
        languageOptions: state.data.languageOptions
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
