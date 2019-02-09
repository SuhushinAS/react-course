import UserContext from 'modules/user/context/index.js';
import React from 'react';

export default function withUser(Component) {
  return class ComponentWithUser extends React.Component {
    renderComponent = (user) => <Component {...user} {...this.props} />;

    render() {
      return <UserContext.Consumer>{this.renderComponent}</UserContext.Consumer>;
    }
  };
}
