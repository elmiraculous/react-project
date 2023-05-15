import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {RegisterBody, RegisterResponse} from "../../app/models/generated/profile.model"
import {AuthenticationRequest, AuthenticationResponse} from "../../app/models/generated"

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
		}),
		authorization: builder.mutation<AuthenticationResponse, AuthenticationRequest>({
			query: (body) => ({
				url: "login",
				body,
				method: "POST"
			})
		})
	})
})

export const {useRegistrationMutation, useAuthorizationMutation} = AuthApi
