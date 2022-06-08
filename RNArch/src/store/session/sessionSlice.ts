import {createSlice} from '@reduxjs/toolkit';
import {User} from 'entity/userEntity';

type SessionState = {isLoading: boolean; user?: User; error?: string};

const initialState: SessionState = {isLoading: false};

const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {
    success: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    request: state => {
      state.isLoading = true;
    },
    error: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {success, request, error} = sessionSlice.actions;

export default sessionSlice.reducer;
