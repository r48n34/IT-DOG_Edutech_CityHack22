import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counterSlice'

const rootReducer = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

export default rootReducer;