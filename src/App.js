import React, { Component } from 'react'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
import reducer from 'state/reducers'
import "./stylesheets/application.css"

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>{
            store.getState().character.race
          }</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
