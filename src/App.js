import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
import reducer from 'state/reducers'
import "./stylesheets/application.css"

// Testing stages for development
import Stage1 from "components/Stages/Stage1"
import Stage2 from "components/Stages/Stage2"

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Stage1/>
          <Stage2/>
        </div>
      </Provider>
    );
  }
}

export default App;
