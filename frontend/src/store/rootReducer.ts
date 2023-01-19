import { combineReducers } from 'redux';
import { trendsReducer } from './trends/trendsSlice';
import { trendIDReducer } from './trendID/trendIDSlice';

const rootReducer = combineReducers({
    trends: trendsReducer,
    trendID: trendIDReducer
});

export { rootReducer };