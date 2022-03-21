import { combineReducers } from 'redux';

import DataAltaReducer from './DataAlta/DataAltaReducer';




const rootReducer = combineReducers({
    
    dataAlta:DataAltaReducer,
})

export default rootReducer