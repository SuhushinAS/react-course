import {userModuleName} from 'modules/user/constants/index.js';
import {createSelector} from 'reselect';

export function userSelector(state) {
  return state[userModuleName];
}

export function userSelectorAction(state) {
  return userSelector(state).action;
}

export function userSelectorData(state) {
  return userSelector(state).data;
}

export function userSelectorItem(state, id) {
  return userSelectorData(state)[id];
}

export function userSelectorId(state) {
  return userSelector(state).id;
}

export function userSelectorList(state) {
  return userSelector(state).list;
}

export const userSelectorListSort = createSelector(
  [userSelectorData, userSelectorList],
  (data, list) => {
    return list.sort((a, b) => {
      const userA = data[a];
      const userB = data[b];
      const fullNameA = `${userA.firstName}${userA.lastName}`;
      const fullNameB = `${userB.firstName}${userB.lastName}`;

      if (fullNameA < fullNameB) {
        return -1;
      }

      if (fullNameA > fullNameB) {
        return 1;
      }

      return 0;
    });
  }
);
