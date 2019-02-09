import Provider from 'modules/user/containers/Provider/index.jsx';
import User from 'modules/user/containers/User/index.jsx';
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Provider>
          <User />
        </Provider>
      </div>
    );
  }
}

export default App;
