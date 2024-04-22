import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Customer } from '../../model/Customer';

export const customersApi = createApi({
    reducerPath: 'customersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234/' }),
    tagTypes: ['Customers'],
    endpoints: (builder) => ({
        //returns Customer[]; no PathPArameter or QueryParameter
        customers: builder.query<Customer[], void>({
            query: () => `/customers`,
            providesTags: ['Customers']
        }),
        // http://localhost:1234/customers/3
        customer: builder.query<Customer, number>({
            query: (id) => `/customers/${id}`,
        }),
        addCustomer: builder.mutation<void, Customer>({
            query: customer => ({
                url: '/customers',
                method: 'post',
                body: customer
            }),
            invalidatesTags: ['Customers']
        })
    }),
});

export const { useCustomerQuery, useCustomersQuery, useAddCustomerMutation } = customersApi;
