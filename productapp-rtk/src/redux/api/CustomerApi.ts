import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Customer } from '../../model/Customer';

export const customersApi = createApi({
    reducerPath: 'customersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234/' }),
    endpoints: (builder) => ({
        //returns Customer[]; no PathPArameter or QueryParameter
        customers: builder.query<Customer[], void>({
            query: () => `/customers`,
        }),
        // http://localhost:1234/customers/3
        customer: builder.query<Customer, number>({
            query: (id) => `/customers/${id}`,
        }),
    }),
});

export const { useCustomerQuery, useCustomersQuery } = customersApi;
