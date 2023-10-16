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
        
        {errorMessage && <h3>{errorMessage}</h3>}
        <Form 
        className="flex flex-col mt-20 max-w-md m-auto rounded p-6 shadow-md bg-gray-300 " 
        method="post" 
        replace 
        onSubmit={(e) => {submit(e.currentTarget)}}>
            <h3 className='self-center mb-4'>Please log in to your account</h3>
            <label className='' htmlFor='myEmail'>Email</label>
            <input 
            id='myEmail'
            className='text-2xl border-2 rounded p-1 mb-4 hover:bg-slate-300 focus:bg-slate-100 focus:ring focus:ring-orange-600'
            type='email'
            name='email'
            placeholder="your@company.com" 
            />
            <label htmlFor='myPassword'>Password</label>
            <input 
            id='myPassword'
            className='mb-8 border-2 rounded p-1 text-2xl hover:bg-slate-300 focus:bg-slate-100 focus:ring focus:ring-orange-600'
            type='password'
            name='password'
            placeholder='Password'
            
            />

            <button
            className='bg-gray-400 py-1.5 px-2.5 rounded '
            >Log In</button>

        </Form>
        </>
    )
}