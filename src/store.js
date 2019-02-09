import reducer from 'reducer.js';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(thunk));
  const store = createStore(reducer, enhancer);

  if (module.hot) {
    module.hot.accept('reducer.js', () => {
      const hotReducer = require('reducer.js').default;

      store.replaceReducer(hotReducer);
    });
  }

  return store;
}
