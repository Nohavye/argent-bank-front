import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
    name: 'userToken',
    initialState: null,
    reducers: {
        set: (state, action) => action.payload,
    },
})

export { actions }
export default reducer
