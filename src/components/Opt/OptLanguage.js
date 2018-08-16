import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { BuildLeft, BuildRight } from 'components/Build'

class OptLanguage extends Component {

  componentDidMount() {
    console.log("OPTLANGUAGE INITIALIZED")
  }

  clickHandler() {
    console.log("Button clicked")
  }

  render() {
    return (
      <div>
        <BuildLeft title={"Choose " + this.props.languageOptions.choose + " Languages"}/>
        <BuildRight selection={true} location='/stage2' list={this.props.languageOptions.from} click={this.clickHandler}/>
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

      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptLanguage);