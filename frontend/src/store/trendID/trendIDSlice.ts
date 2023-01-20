import {  createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Trend {
    id: number;
    post_title: string;
    post_content: string;
    post_name: string;
    post_images: string[];
    guid: string;
}

const initialState: Trend = {
    id: -1,
    post_title: '',
    post_content: '',
    post_name: '',
    post_images: [],
    guid: ''
};

const trendIDSlice = createSlice({
    name: 'trendID',
    initialState,
    reducers: {
        setTrendId(state, action: PayloadAction<Trend>) {
            return action.payload
        },
        removeTrendId(state) {
            return initialState
        }
    },
})

export const trendIDReducer = trendIDSlice.reducer;
export const { setTrendId, removeTrendId } = trendIDSlice.actions;
