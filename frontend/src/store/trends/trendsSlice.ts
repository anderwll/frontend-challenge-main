import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { apiGET } from '../../services';
import { InitialStateInt, ResponseAPI } from '../typeStore';

const initialState: InitialStateInt = {
    loading: false,
    success: false,
    message: '',
    data: null
};

const getTrends = createAsyncThunk('trends/getTrends', async () => {
    const response = await apiGET('/trends');
    return response;
});

const trendsSlice = createSlice({
    name: 'trends',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // --- BUSCAR TODOS ---

        builder.addCase(getTrends.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getTrends.fulfilled, (state, action: PayloadAction<ResponseAPI>) => {
            state.loading = false;
            state.success = action.payload.success;
            state.message = action.payload.message;

            if(action.payload.success) {
                state.data = action.payload.data
            }
        }) 
        builder.addCase(getTrends.rejected, (state) => {
            state.success = false; 
        })

       
    }
})

export const trendsReducer = trendsSlice.reducer;
export { getTrends };