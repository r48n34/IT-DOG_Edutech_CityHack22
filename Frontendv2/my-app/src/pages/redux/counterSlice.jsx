import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    userData: {},
    userSetting: {}, // temp use for futurn user setting
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setUserSetting: (state, action) => {
      state.userSetting = action.payload;
    },
  }
})

export const { setUserData, setUserSetting } = counterSlice.actions
export default counterSlice.reducer
