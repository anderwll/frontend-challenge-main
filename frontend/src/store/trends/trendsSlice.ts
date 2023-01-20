import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '..';
import { apiGET } from '../../services';

const adapter = createEntityAdapter<any>({
    selectId: (entity) => entity.id
});


export const { selectAll: getAllTendencies, selectById: getTendencyByID } = adapter.getSelectors((state: RootState) => state.trends)


const getTrends = createAsyncThunk('trends/getTrends', async () => {
    const response = await apiGET('/trends');
    return response;
});

const trendsSlice = createSlice({
    name: 'trends',
    initialState: adapter.getInitialState({
        loading: false,
        message: '',
        success: false,
    }),
    reducers: {},
    extraReducers: (builder) => {
        // --- BUSCAR TODOS ---

        builder.addCase(getTrends.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getTrends.fulfilled, (state, action) => {
            state.loading = false;
            state.success = action.payload.success;
            state.message = action.payload.message;

            if(action.payload.success) {
                adapter.setAll(state, action.payload.data)
            }
        }) 
        builder.addCase(getTrends.rejected, (state) => {
            state.success = false; 
        })
    }
})

export const trendsReducer = trendsSlice.reducer;
export { getTrends };