import { combineReducers } from 'redux';

// Imports: Reducers
import cartReducer from './cartReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Exports
export default rootReducer;
