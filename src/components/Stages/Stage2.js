import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setBackground, setAlignment, setCharacterName } from 'state/actions';

class Stage2 extends Component {

  handleSubmit = event => {
    const { actions: { setBackground, setAlignment, setCharacterName } } = this.props;
    const backgroundValue = event.target.background.value;
    const alignmentValue = event.target.alignment.value;
    const characterNameValue = event.target.characterName.value;

    event.preventDefault();
    setBackground(backgroundValue);
    setAlignment(alignmentValue);
    setCharacterName(characterNameValue);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select a Background:
          <input name='background' type='text'></input>
        </label>
        <label>
          Select an Alignment:
          <input name='alignment' type='text'></input>
        </label>
        <label>
          Enter your Character's Name:
          <input name='characterName' type='text'></input>
        </label>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    background: state.character.background,
    alignment: state.character.alignment,
    characterName: state.character.characterName,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        setBackground,
        setAlignment,
        setCharacterName
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stage2)
