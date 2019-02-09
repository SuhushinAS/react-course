import reducer from 'reducer.js';
import {compose, createStore} from 'redux';

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers();
  const store = createStore(reducer, enhancer);

  if (module.hot) {
    module.hot.accept('reducer.js', () => {
      const hotReducer = require('reducer.js').default;

      store.replaceReducer(hotReducer);
    });
  }

  return store;
}
