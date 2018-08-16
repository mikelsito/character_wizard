import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchClasses, fetchClass } from 'state/actions'

import { BuildLeft, BuildRight } from 'components/Build'

class Stage2 extends Component {

    componentDidMount() {
        this.props.actions.fetchClasses();
    }

    render() {
        return (
            <div>
                <BuildLeft title={this.props.class}/>
                {
                    !this.props.allClasses ? null :
                    <BuildRight selection={true} location="/stage3" list={this.props.allClasses} click={this.props.actions.fetchClass} />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allClasses: state.data.allClasses,
        class: state.character.class
    }
}

const mapDisptachToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                fetchClasses,
                fetchClass
            },
            dispatch
        )
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Stage2);
