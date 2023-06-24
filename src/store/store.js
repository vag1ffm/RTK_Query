import { configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {userAPI} from "../services/UserService";



export const store = configureStore({
        reducer: {
            [userAPI.reducerPath]: userAPI.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(userAPI.middleware)
})


setupListeners(store.dispatch)