import {reduxActions} from 'modules/user/constants/index.js';

export function closeUser() {
  return {
    type: reduxActions.close,
  };
}

export function editUser(user) {
  return {
    payload: {user},
    type: reduxActions.edit,
  };
}

export function loadUser(userList) {
  const data = userList.reduce((prev, user) => ({
    ...prev,
    [user.id]: user,
  }), {});
  const list = userList.map((user) => user.id);
  return {
    payload: {
      data,
      list,
    },
    type: reduxActions.load,
  };
}

export function saveUser(user) {
  return {
    payload: {user},
    type: reduxActions.save,
  };
}
