import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        video_array: [],
    },
    reducers: {
        current_videos: (state, action) => {
            state.video_array = action.payload
        },
        delete_videos: (state, action) => {
            const videos = state.video_array.filter((e) => { return (e.id != action.payload) })
            state.video_array = videos
        },
    }
})

export const {
    current_videos,
    delete_videos
} = videoSlice.actions

export default videoSlice.reducer