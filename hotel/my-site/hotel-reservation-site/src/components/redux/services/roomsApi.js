import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const roomsApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),

  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "rooms",
      providesTags: ["rooms"],
    }),

    getLimitRooms:builder.query({
      query:(page)=>`rooms?_page=${page}&_limit=1`,
       providesTags: ["rooms"],

    }),

    getSpecialRooms: builder.query({
      query: () => "specialRooms",
      providesTags: ["specialRooms"],
    }),

    deleteRoom:builder.mutation({
      query:(id)=>({
        url:`rooms/${id}`,
        method:"DELETE"
      }),
      invalidatesTags: ["rooms"],
    })
  }),
});

export const { useGetRoomsQuery,useGetSpecialRoomsQuery,useGetLimitRoomsQuery,useDeleteRoomMutation } = roomsApi;
