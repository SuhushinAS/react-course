import {actions} from 'modules/user/constants/index.js';
import Form from 'modules/user/containers/Form/index.jsx';
import List from 'modules/user/containers/List/index.jsx';
import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.load();
  }

  async load() {
    const userList = await this.fetch();
    const data = userList.reduce(this.getData, {});
    const list = userList.map(this.getList);
    this.setState({
      data,
      list,
    });
  }

  async fetch() {
    const response = await fetch('/api/v1/user');
    const {data} = await response.json();
    return data.list;
  }

  getData = (prev, user) => ({
    ...prev,
    [user.id]: user,
  });

  getList = (user) => user.id;

  editUser = (user) => {
    this.setState({
      action: actions.edit,
      id: user.id,
    });
  };

  saveUser = (user) => {
    this.setState((state) => ({
      ...state,
      data: {
        ...state.data,
        [user.id]: user,
      },
    }));
  };

  closeUser = () => {
    this.setState({
      action: actions.list,
      id: 0,
    });
  };

  render() {
    return (
      <div>
        <List data={this.state.data} list={this.state.list} editUser={this.editUser} />
        {this.renderForm()}
      </div>
    );
  }

  state = {
    action: actions.list,
    id: 0,
    data: {},
    list: [],
  };

  renderForm() {
    const {action, data, id} = this.state;
    if (actions.edit === action) {
      const user = data[id];
      if (user) {
        return <Form user={user} saveUser={this.saveUser} closeUser={this.closeUser} />;
      }
    }
  }
}

export default User;
