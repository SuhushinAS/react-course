import {loadUser} from 'modules/user/actions/index.js';
import {actions} from 'modules/user/constants/index.js';
import Form from 'modules/user/containers/Form/index.jsx';
import List from 'modules/user/containers/List/index.jsx';
import {userSelectorAction, userSelectorId, userSelectorListSort} from 'modules/user/selectors/index.js';
import React from 'react';
import {connect} from 'react-redux';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.props.loadUser();
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

export default connect(
  (state) => ({
    action: userSelectorAction(state),
    id: userSelectorId(state),
    list: userSelectorListSort(state),
  }),
  {
    loadUser,
  },
)(User);
