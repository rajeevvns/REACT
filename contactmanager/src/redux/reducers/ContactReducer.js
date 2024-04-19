// in react initialization was done using useReducer
export default function ContactReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_CONTACT':
            return [...state, action.payload]
        case 'REMOVE_CONTACT': /* remove by email */
            return state.filter(contact => contact.email !== action.payload)
        case 'CLEAR_CONTACTS':
            return [];
        default:
            return state;
    }
}