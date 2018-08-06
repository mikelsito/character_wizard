import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
import reducer from 'state/reducers'
import "./stylesheets/application.css"
import ContentHolder from './components/ContentHolder/ContentHolder';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {

  nextStage = event => {
    console.log("Parent Logger")
  }

  render() {
    return (
      <BrowserRouter>
      <Provider store={store}>
        <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
          <Stage1 nextStage={this.nextStage}/>
          <Stage2 nextStage={this.nextStage}/>
=======
<<<<<<< HEAD
          <Stage1/>
          <Stage2/>
=======
          <ContentHolder />
>>>>>>> changes
>>>>>>> changes
=======
          <ContentHolder />
>>>>>>> added router
        </div>
      </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
