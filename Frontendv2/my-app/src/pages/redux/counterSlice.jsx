import { createSlice } from '@reduxjs/toolkit'
import { setArrToLocalStore, getLocalStoreArr } from '../utility/localStoreUtili'


const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    userData: {},
    userSetting: {}, // temp use for futurn user setting
    noticesData: getLocalStoreArr("noticesData")
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setUserSetting: (state, action) => {
      state.userSetting = action.payload;
    },
    addNoticesData: (state, action) => {
      action.payload.forEach( v => state.noticesData.push(v) );
      console.log(state.noticesData);
      setArrToLocalStore("noticesData", state.noticesData);
    },
  }
})

export const { setUserData, setUserSetting, addNoticesData } = counterSlice.actions
export default counterSlice.reducer
