import React, {Component, Fragment} from 'react';
import './App.css';
import Membre from './components/Membre';

class App extends Component {
  render () {
    return (
      <Fragment>  
        <div className="App">
          <h1>React App</h1>
        </div>
        <Membre/>
      </Fragment>

    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React App'))
    );
  }
}



export default App;
