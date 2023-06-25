import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const userAPI = createApi({
    reducerPath: "user/API",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/"
    }),
    endpoints: build => ({
        fetchAllUsers: build.query({
            query: ({ end }) => ({
                url: "posts",
                params: {
                    _start: 0,
                    _end: end
                }
            })
        })
    })
})

export const { useFetchAllUsersQuery } = userAPI