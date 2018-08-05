import React, { Component } from 'react'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
import reducer from 'state/reducers'
import "./stylesheets/application.css"
import Stage1 from "components/Stages/Stage1"

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Stage1></Stage1>
        </div>
      </Provider>
    );
  }
}

export default App;
