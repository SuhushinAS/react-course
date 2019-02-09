import {actions} from 'modules/user/constants/index.js';
import Form from 'modules/user/containers/Form/index.jsx';
import List from 'modules/user/containers/List/index.jsx';
import withUser from 'modules/user/hoc/withUser/index.jsx';
import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.load();
  }

  async load() {
    const userList = await this.fetch();
    this.props.loadUser(userList);
  }

  async fetch() {
    const response = await fetch('/api/v1/user');
    const {data} = await response.json();
    return data.list;
  }

  render() {
    return (
      <div>
        <List list={this.props.list} />
        {this.renderForm()}
      </div>
    );
  }

  renderForm() {
    const {action, id} = this.props;
    if (actions.edit === action && id) {
      return <Form id={id} />;
    }
  }
}

export default withUser(User);
