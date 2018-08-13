import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchClasses } from 'state/actions'

import { BuildLeft, BuildRight } from 'components/Build'

class Stage2 extends Component {

    componentDidMount() {
        this.props.actions.fetchClasses();
    }

    render() {
        return (
            <div>
                <BuildLeft />
                {
                    !this.props.allClasses ? null :
                    <BuildRight list={this.props.allClasses} />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allClasses: state.data.allClasses
    }
}

const mapDisptachToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                fetchClasses
            },
            dispatch
        )
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Stage2);
