import React, { Component } from 'react';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk'
import reducer from 'state/reducers';
import ContentHolder from '../ContentHolder/ContentHolder';

import '../../stylesheets/application.css';

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* Menu Goes here */}
          <ContentHolder/>
        </div>
      </Provider>
    );
  }
}

export default App;
