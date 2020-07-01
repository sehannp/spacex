import {combineReducers} from 'redux';

import dataReducer from './dataReducer';

const rootReducer = combineReducers({
    backendData: dataReducer
});

export default rootReducer;
