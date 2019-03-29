import Item from 'modules/user/containers/Item/index.jsx';
import React from 'react';

class List extends React.PureComponent {
  renderItem = (id) => <Item id={id} key={id} />;

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
