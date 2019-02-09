import {editUser} from 'modules/user/actions/index.js';
import {userSelectorItem} from 'modules/user/selectors/index.js';
import React from 'react';
import {connect} from 'react-redux';

class Item extends React.Component {
  handleClick = () => {
    this.props.editUser(this.props.user);
  };

  render() {
    const {user} = this.props;
    const fullName = `${user.firstName} ${user.lastName}`;

    return (
      <tr>
        <td>
          <img src={user.picture} alt={fullName} />
        </td>
        <td>{fullName}</td>
        <td>{user.company}</td>
        <td>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </td>
        <td>
          <button onClick={this.handleClick}>edit</button>
        </td>
      </tr>
    );
  }
}

export default connect(
  (state, props) => ({
    user: userSelectorItem(state, props.id),
  }),
  {
    editUser,
  },
)(Item);
