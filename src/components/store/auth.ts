import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const AuthApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({baseUrl: "https://ecoapp.cloud.technokratos.com/eco-rus/api/v1",}),
	endpoints: (builder) => ({
		registration: builder.mutation<RegisterResponse, RegisterBody>({
			query: (body) => ({
				url: "account",
				body,
				method: "POST"
			})
		})
	})
})