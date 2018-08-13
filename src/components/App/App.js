import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from 'state/reducers'
import ContentHolder from 'components/ContentHolder/ContentHolder';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ContentHolder />
        </div>
      </Provider>
    );
  }
}

export default App;
