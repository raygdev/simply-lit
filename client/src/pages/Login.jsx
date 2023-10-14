import React from 'react'
import {Form, useSubmit, useActionData} from 'react-router-dom'

export async function action({request}) {
    console.log(request)
    try{
        const data = await request.formData()
        const email = data.get("email")
        const password = data.get("password")
    } catch(e){
        return e.message
    }
    
    console.log(email, password)
    
}

export default function Login(){
   const submit = useSubmit()
   const errorMessage = useActionData()
    return (
        <>
        <h1>this is the login page</h1>
        {errorMessage && <h3>{errorMessage}</h3>}
        <Form method="post" replace onSubmit={(e) => {submit(e.currentTarget)}}>
            <input 
            type="email"
            name="email"
            placeholder="Email address" 
            />

            <input 
            type="password" 
            name="password"
            placeholder="Password"
            />

            <button type="submit">Log In</button>

        </Form>
        </>
    )
}