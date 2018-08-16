import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchLanguage } from 'state/actions'
import { BuildLeft, BuildRight } from 'components/Build'

class OptLanguage extends Component {

  render() {
    return (
      <div>
        <BuildLeft title={"Choose " + this.props.languageOptions.choose + " Languages"}/>
        <BuildRight selection={true} location='/stage2' list={this.props.languageOptions.from} click={this.props.actions.fetchLanguage}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    languageOptions: state.data.languageOptions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        fetchLanguage
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptLanguage);