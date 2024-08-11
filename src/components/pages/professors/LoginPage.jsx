import axios, { Axios } from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


export default function LoginPage() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword( e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        const form = {
            username: username,
            password: password
        }

        axios.post('/api/v1/users/login', form)
        .then( (response) => {
            console.log(response.data)
            
            alert('Login Successful')
            navigate('/dashboard')
        })
        .catch( (error) => {
            console.log(error)
            const htmlContent = error.response.data
      
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, 'text/html');
     
            const preTag = doc.querySelector('pre');
            const errorMessage = preTag ? preTag.textContent : 'Unknown error occurred';
            alert(errorMessage)
        })
    }


    return (
        <div>
            
           
            

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900" >Username</label>
           <div class="mt-2">
           <input type="text" onChange={handleUsername} name="username" id="username" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <div className="mt-5">
                
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" >Password</label> 
                <div className="mt-2">
                <input type="text" onChange={handlePassword} name="passsword" id="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    
                </div>
            </div>
            <div className="mt-5">
                <button type="submit" onClick={handleClick} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Submit</button>
            </div>
            </div>
        </div>
        </div>
        
    )
}