import {actions} from 'modules/user/constants/index.js';
import UserContext from 'modules/user/context/index.js';
import React from 'react';

export default class Provider extends React.Component {
  loadUser = (userList) => {
    const data = userList.reduce(this.getData, {});
    const list = userList.map(this.getList);
    this.setState({
      data,
      list,
    });
  };

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

  /**
   * Отображение компонента
   * @return {*} Представление компонента.
   */
  render() {
    return <UserContext.Provider value={{
      ...this.state,
      closeUser: this.closeUser,
      editUser: this.editUser,
      loadUser: this.loadUser,
      saveUser: this.saveUser,
    }}>{this.props.children}</UserContext.Provider>;
  }

  state = {
    action: actions.list,
    id: 0,
    data: {},
    list: [],
  };
}
