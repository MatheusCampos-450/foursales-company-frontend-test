import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type UsersState } from './types';
import type { UserProps } from '@/@core/domain/entities/user';

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
  userDetails: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUserDetails: (state, action: PayloadAction<UserProps>) => {
      state.userDetails = action.payload;
    },
    removeUserDetails: (state) => {
      state.userDetails = null;
    },
    fetchUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action: PayloadAction<UserProps[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchUsersFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  getUserDetails,
  removeUserDetails,
} = userSlice.actions;

export default userSlice.reducer;
