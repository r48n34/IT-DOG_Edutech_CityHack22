import { createSlice } from '@reduxjs/toolkit'
import { setArrToLocalStore, getLocalStoreArr } from '../utility/localStoreUtili'


const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    userData: {},
    userSetting: {}, // temp use for further user setting
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
    addOneNoticesData: (state, action) => {
      action.payload.forEach( v => state.noticesData.push(v) );
      console.log(state.noticesData);
      setArrToLocalStore("noticesData", action.payload);
    },
  }
})

export const { setUserData, setUserSetting, addNoticesData, addOneNoticesData } = counterSlice.actions
export default counterSlice.reducer
