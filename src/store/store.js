import { configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {postAPI} from "../services/PostsService";



export const store = configureStore({
        reducer: {
            [postAPI.reducerPath]: postAPI.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)
})


setupListeners(store.dispatch)