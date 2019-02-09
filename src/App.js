import User from 'modules/user/containers/User/index.jsx';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from 'store.js';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <User />
        </Provider>
      </div>
    );
  }
}

export default App;
