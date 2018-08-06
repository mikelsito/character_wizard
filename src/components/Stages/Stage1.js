import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setRace, setClass } from 'state/actions';

import { Link } from 'react-router-dom';

class Stage1 extends Component {

  handleSubmit = event => {
    const { actions: { setRace, setClass } } = this.props;
    const raceValue = event.target.race.value;
    const classValue = event.target.class.value;

    event.preventDefault();
    setRace(raceValue);
    setClass(classValue);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select a Race:
          <input name='race' type="text"></input>
        </label>
        <label>
          Select a Class:
          <input name='class' type="text"></input>
        </label>
        <button type="submit" onClick={this.props.nextStage}>Submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    race: state.character.race,
    class: state.character.class,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        setRace,
        setClass
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stage1)
