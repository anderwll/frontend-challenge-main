import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiGETID } from '../../services';

const initialState = {
    id: -1,
    loading: false,
    success: false,
    message: '',
    data: {
        post_title: '',
        post_content: '',
        post_name: '',
        post_images: []
    }
};

const getTrendId = createAsyncThunk('trends/getTrendId', async (id: number) => {
    const response = await apiGETID(`/trends/${id}`);
    return response;
});


const trendIDSlice = createSlice({
    name: 'trendID',
    initialState,
    reducers: {
        setId(state, action: PayloadAction<number>) {
            state.id = action.payload
        },
        removeID(state) {
            state = initialState
        }
    },
    extraReducers: (builder) => {
         // --- BUSCAR POR ID ---

         builder.addCase(getTrendId.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getTrendId.fulfilled, (state, action) => {
            state.loading = false;
            state.success = action.payload.success;
            state.message = action.payload.message;

            if(action.payload.success) {
                state.data = action.payload.data
            }
        })
        builder.addCase(getTrendId.rejected, (state) => {
            state.success = false; 
        })

    }

})

export const trendIDReducer = trendIDSlice.reducer;
export const { setId, removeID } = trendIDSlice.actions;
export { getTrendId };