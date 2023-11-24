import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchContactDetails = createAsyncThunk(
    'contactDetails/get',
    async (contactId, thunkApi) => {
      
      try {
        const {data} = await axios.get("https://655f101a879575426b44759d.mockapi.io/")
        return data;
      } catch (err) {
        
        return thunkApi.rejectWithValue(err.message)
      }
    }
  )

const initialState = {
    contactsDetails: null,
    isLoading: false,
    error: null,
}

const contactsDetailsSlice = createSlice({
    name: 'contactsDetails',
    initialState,
    reducers: {},
    extraReducers: builder => 
    builder.addCase(fetchContactDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    }).addCase(fetchContactDetails.fulfilled, (state,{payload}) => {
        state.isLoading = false;
        state.contactsDetails = payload
    }).addCase(fetchContactDetails.rejected, (state,{payload}) => {
        state.isLoading = false;
        state.error = payload
})
})

export const contactsDetailsReducer = contactsDetailsSlice.reducer;