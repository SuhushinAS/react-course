import {createReducer} from 'helpers/reducer.js';
import {actions, reduxActions} from 'modules/user/constants/index.js';

const initialState = {
  action: actions.list,
  data: {},
  id: 0,
  list: [],
};

function close(state) {
  return {
    ...state,
    action: actions.list,
    id: 0,
  };
}

function edit(state, payload) {
  return {
    ...state,
    action: actions.edit,
    id: payload.user.id,
  };
}

function load(state, payload) {
  const {data, list} = payload;
  return {
    ...state,
    data,
    list,
  };
}

function save(state, payload) {
  const {user} = payload;
  return {
    ...state,
    data: {
      ...state.data,
      [user.id]: user,
    },
  };
}

const reducers = {
  [reduxActions.close]: close,
  [reduxActions.edit]: edit,
  [reduxActions.load]: load,
  [reduxActions.save]: save,
};

export default createReducer(initialState, reducers);
