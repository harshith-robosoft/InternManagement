import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tech: [],
    id: [],
    email: [],
    name: [],
}

export const cvSlice = createSlice({

    name: 'cv',
    initialState,
    reducers: {

        addTech: (state, action) => {
            state.tech = action.payload;
            // console.log(state.id)
        },

        addId: (state, action) => {
            state.id = action.payload;
            // console.log(state.id)
        },

        addEmailId: (state, action) => {
            state.email = action.payload;
            // console.log(state.email)
        },

        addName: (state, action) => {
            state.name = action.payload;
            // console.log(state.name)
        },

    },

})


export const { addTech, addId, addEmailId, addName } = cvSlice.actions;


export default cvSlice.reducer