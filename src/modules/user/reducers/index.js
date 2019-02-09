import {actions, reduxActions} from 'modules/user/constants/index.js';

const initialState = {
  action: actions.list,
  data: {},
  id: 0,
  list: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case reduxActions.close:
      return {
        ...state,
        action: actions.list,
        id: 0,
      };

    case reduxActions.edit:
      return {
        ...state,
        action: actions.edit,
        id: action.payload.user.id,
      };

    case reduxActions.load:
      const {data, list} = action.payload;
      return {
        ...state,
        data,
        list,
      };

    case reduxActions.save:
      const {user} = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [user.id]: user,
        },
      };

    default:
      return state;
  }
}
