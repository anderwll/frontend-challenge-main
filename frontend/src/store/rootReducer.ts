import { combineReducers } from 'redux';
import { trendsReducer } from './trends/trendsSlice';
import { trendIDReducer } from './trendID/trendIDSlice';
import { IdTrendSelectedReducer } from './idTrendSelected/idTrendSelectedSlice';

const rootReducer = combineReducers({
    trends: trendsReducer,
    trendID: trendIDReducer,
    idSelected: IdTrendSelectedReducer
});

export { rootReducer };