import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setRace, setClass } from 'state/actions';

class Stage1 extends Component {
  // Pull this out to a component method, instead of defining it in the render
  // function. Everything inside the render function gets recreated on every
  // render, so this is more performant, and more 'reacty'.
  handleSubmit = event => {
    // I'm desctructering props here, but I could as easily call
    // this.props.actions.setRace(raceValue)

    const { actions: { setRace, setClass } } = this.props;
    const raceValue = event.target.race.value;
    const classValue = event.target.class.value;

    event.preventDefault();
    setRace(raceValue);
    setClass(classValue);
  }

  render() {
    // Adding a 'name' attribute to the inputs allow us to get the values off
    // event.target by name, instead of by index.
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
        <button type="submit">Submit</button>
      </form>
    )

    Stage1.propTypes = {
      race: PropTypes.string.isRequired,
      class: PropTypes.string.isRequired
    }
  }
}


// We can access whatever data we want from the redux store here and pass them
// in as props to our component. In this case, I'm adding all the data from the
// character store. We don't neccesarily need it, but just using it as an
// example.
const mapStateToProps = state => {
  return {
    character: state.character,
  }
}

// We bind our actionCreators here. We pass them in as props as well, keyed
// on 'actions', but could pass it in however we like.
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
