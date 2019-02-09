import withUser from 'modules/user/hoc/withUser/index.jsx';
import React from 'react';

class Item extends React.Component {
  handleClick = () => {
    this.props.editUser(this.props.data[this.props.id]);
  };

  render() {
    const user = this.props.data[this.props.id];
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

export default withUser(Item);
