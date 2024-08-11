import React, { useState } from "react";
import axios from "axios";


export default function ChangePassword() {


    const [oldPassword, setoldPassword] = useState('')
    const [newPassword, setnewPassword] = useState('')

    const handleoldPassword = (e) => {
        setoldPassword(e.target.value)
    }

    const handlenewPassword = (e) => {
        setnewPassword( e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        const form = {
            oldPassword: oldPassword,
            newPassword: newPassword
        }

        axios.post('/api/v1/users/change-password', form)
        .then( (response) => {
            console.log(response.data)
            
            alert('Password Changed')
            
        })
        .catch( (error) => {
            console.log(error)
            alert('Password Change Failed')
        })
    }

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <label htmlFor="oldPassword " className="block text-sm font-medium leading-6 text-gray-900" >OldPassword</label> 
                <div className="mt-2">
                    <input type="text" onChange={handleoldPassword} name="username" id="username" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
                </div>
            <div className="mt-5">
                <label htmlFor="newPassword" className="block text-sm font-medium leading-6 text-gray-900"  >NewPassword</label>
                <div className="mt-2">
                    <input type="text" onChange={handlenewPassword} name="passsword" id="password"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div className="mt-5">
                <button type="submit" onClick={handleClick} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Submit</button>
            </div>
            </div>
        </div>
    )
}
