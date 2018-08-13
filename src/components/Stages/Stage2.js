import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { fetchClasses } from 'state/actions'

import { BuildLeft, BuildRight } from 'components/Build'
import { findAllClasses } from 'external/5eAPI/queries'

class Stage1 extends Component {

    componentDidMount() {
        // this.props.actions.fetchClasses();
        findAllClasses();
    }

    render() {
        return (
            <div>
                <BuildLeft />
                {
                    !this.props.allRaces ? null :
                    <BuildRight classList={this.allClasses} />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // allClasses: state.data.allClasses
    }
}

const mapDisptachToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                // fetchClasses
            },
            dispatch
        )
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Stage1);
