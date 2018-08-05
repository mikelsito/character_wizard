import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as setActionCreators from 'state/actions/character'
// console.log(setActionCreators)

class Stage1 extends Component {
  constructor(props) {
    super(props);

    const {dispatch} = props;
    console.log(props, {dispatch})

    this.boundActionCreators = bindActionCreators(setActionCreators, dispatch)
    // console.log(this.boundActionCreators)
  }

  componentDidMount() {
    let { dispatch } = this.props
    let action = setActionCreators.setRace('Human')
    dispatch(action)
  }

  render() {
    let { things } = this.props

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Race: " + event.target[0].value, "Class: " + event.target[1].value)
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Select a Race:
          <input type="text" value={race}></input>
        </label>
        <label>
          Select a Class:
          <input type="text">{props.class}</input>
        </label>
        <button type="submit">Submit</button>
      </form>
    )

    Stage1.propTypes = {
      race: PropTypes.string.isRequired,
      class: PropTypes.string.isRequired
    }
  }
}

export default Stage1
