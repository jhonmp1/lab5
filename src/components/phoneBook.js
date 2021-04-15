import React, { useState } from 'react'

const AddContactDetailsForm = props => {
    const initialFormState = { 
                                id: null || props.id, 
                                firstName: '' || props.firstName, 
                                lastName: '' || props.lastName, 
                                phoneNumber: '' || props.phoneNumber 
                            }
                            
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!user.firstName || !user.lastName || !user.phoneNumber) return
                props.addUser(user)
                setUser(initialFormState)
            }}
        >
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
            <label htmlFor="lastName">lastName</label>
            <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
            <label htmlFor="phoneNumber" >Phone Number</label>
            <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleInputChange} />
            <button type="submit">Add new Contact</button>
        </form>
    )
}

export default AddContactDetailsForm