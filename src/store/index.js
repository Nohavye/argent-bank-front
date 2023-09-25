import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

// Reducers
import userReducer from '../features/user'

export default configureStore({
    reducer: {
        user: userReducer,
    },
})

export const selectors = {
    User: () => useSelector((state) => state.user),
}
