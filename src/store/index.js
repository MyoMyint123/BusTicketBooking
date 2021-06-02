import { createStore, compose, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import thunkMiddleware from 'redux-thunk';
// import { createBrowserHistory } from 'history';
// import { routerMiddleware } from 'connected-react-router'
import rootReducer from '../reducers/rootReducer'
import rootEpic from '../epics';


const epicMiddleware = createEpicMiddleware();
// export const history = createBrowserHistory();

const initialState = {}
const enhancers = []
// const middleware = [epicMiddleware]
const middleware = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
    rootReducer,
    composedEnhancers
)

// epicMiddleware.run(rootEpic);