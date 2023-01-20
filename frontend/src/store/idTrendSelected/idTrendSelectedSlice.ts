import {  createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = ''

const IdTrendSelectedSlice = createSlice({
    name: 'idTrendSelected',
    initialState,
    reducers: {
        setIdSelected(state, action: PayloadAction<string>) {
            return action.payload
        },
        removeIdSelected(state) {
            return initialState
        }
    },
})

export const IdTrendSelectedReducer = IdTrendSelectedSlice.reducer;
export const { setIdSelected, removeIdSelected } = IdTrendSelectedSlice.actions;
