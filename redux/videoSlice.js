import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        video_array: [],
    },
    reducers: {
        current_videos: (state, action) => {
            state.video_array = action.payload
        }
    }
})

export const {
    current_videos,
} = videoSlice.actions

export default videoSlice.reducer