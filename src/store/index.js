import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

// Reducers
import userTokenReducer from '../features/userToken'

export default configureStore({
    reducer: {
        userToken: userTokenReducer,
    },
})

export const selectors = {
    UserToken: () => useSelector((state) => state.userToken),
}
