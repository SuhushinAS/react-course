import Item from 'modules/user/containers/Item/index.jsx';
import React from 'react';

class List extends React.Component {
  renderItem = (id) => <Item user={this.props.data[id]} key={id} editUser={this.props.editUser} />;

  render() {
    return (
      <table>
        <tbody>
          {this.props.list.map(this.renderItem)}
        </tbody>
      </table>
    );
  }
}

export default List;
