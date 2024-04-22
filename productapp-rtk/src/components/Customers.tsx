import React from 'react'
import { useCustomerQuery, useCustomersQuery } from '../redux/api/CustomerApi';
import { error } from 'console';
import CustomerForm from './CustomerForm';

export default function Customers() {
    const { error, isError, isFetching, isLoading, isSuccess, data } = useCustomersQuery();
    return (
        <div>
            <h1>RTK Query</h1>
            {isLoading && <h1>Loading...</h1>} <br />
            {isFetching && <h1>Fetching...</h1>} <br />
            {isError && <h1>Boom :-( </h1>}
            {isSuccess && (
                <div>
                    <CustomerForm />
                    {
                        data.map(customer => <h2 key={customer.id}> {customer.firstName} , {customer.lastName}</h2>)
                    }
                </div>
            )}
        </div>
    )
}
