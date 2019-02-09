export function createReducer(initialState, reducers) {
  return function(state = initialState, action) {
    const reducer = reducers[action.type];
    if ('function' === typeof reducer) {
      return reducer(state, action.payload);
    }
    return state;
  };
}
