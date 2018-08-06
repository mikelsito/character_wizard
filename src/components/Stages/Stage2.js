import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setBackground, setAlignment, setCharacterName, setCharacterHeight, setCharacterWeight, setCharacterSize, setCharacterSpeed } from 'state/actions';

class Stage2 extends Component {

  handleSubmit = event => {
    const { actions: { setBackground, setAlignment, setCharacterName, setCharacterHeight, setCharacterWeight, setCharacterSize, setCharacterSpeed } } = this.props;

    const backgroundValue = event.target.background.value;
    const alignmentValue = event.target.alignment.value;
    const characterNameValue = event.target.characterName.value;
    const heightValue = event.target.height.value;
    const weightValue = event.target.weight.value;
    const sizeValue = event.target.size.value;
    const speedValue = event.target.speed.value;

    event.preventDefault();
    setBackground(backgroundValue);
    setAlignment(alignmentValue);
    setCharacterName(characterNameValue);
    setCharacterHeight(heightValue);
    setCharacterWeight(weightValue);
    setCharacterSize(sizeValue);
    setCharacterSpeed(speedValue);
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
        <label>
          Enter your Character's Height:
          <input name='height' type='text'></input>
        </label>
        <label>
          Enter your Character's Weight:
          <input name='weight' type='text'></input>
        </label>
        <label>
          Enter your Character's Size:
          <input name='size' type='text'></input>
        </label>
        <label>
          Enter your Character's Speed:
          <input name='speed' type='text'></input>
        </label>
        <button type='submit' onClick={this.props.nextStage}>Submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    background: state.character.background,
    alignment: state.character.alignment,
    characterName: state.character.characterName,
    height: state.character.height,
    weight: state.character.weight,
    size: state.character.size,
    speed: state.character.speed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        setBackground,
        setAlignment,
        setCharacterName,
        setCharacterHeight,
        setCharacterWeight,
        setCharacterSize,
        setCharacterSpeed
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stage2)
