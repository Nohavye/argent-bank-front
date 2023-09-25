import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        reset: (state) => null,
        set: (state, action) => action.payload,
    },
})

export { actions }
export default reducer
