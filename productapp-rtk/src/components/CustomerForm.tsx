import React from 'react'
import { useAddCustomerMutation, useCustomersQuery } from '../redux/api/CustomerApi'

export default function CustomerForm() {
    const [addCustomer] = useAddCustomerMutation();
    // const { refetch } = useCustomersQuery();
    const customer = {
        "id": 7,
        "firstName": "Lee",
        "lastName": "Ping"
    }

    const addHandler = async () => {
        await addCustomer(customer);
        // refetch();
    }

    return (
        <div>
            <button type='button' onClick={addHandler}>Add Customer</button>
        </div>
    )
}
