import axios from "axios";
import React, { useState } from "react";



export default function Admin() {

    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [department, setDepartment] = useState('')
    const [designation, setDesignation] = useState('')

    const handleFullname = (e) => {
        setFullName(e.target.value)
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleDepartment = (e) => {
        setDepartment(e.target.value)
    }

    const handleDesignation = (e) => {
        setDesignation(e.target.value)
    }
    const handleSubmit = (event) => {

        if(fullName.trim() === '' || username.trim() === '' || password.trim() === '' || department.trim() === '' || designation.trim() === ''){
            
                alert('Please fill all the fields')
                return
            }
        console.log('Submit Button Clicked')
        event.preventDefault()
        const form = {
            fullName: fullName,
            username: username,
            password: password,
            department: department,
            designation: designation
        }
        

        axios.post('/api/v1/users/register', form)
        .then( (response) => {
            console.log(response.data)
            alert('Teacher Added Successfully')
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
        return

    }


    return(
        <div className="admin">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <h4 className="text-base font-semibold leading-7 text-gray-900" >Enter the Teachers Details</h4>

                <form action="">
                    <div className="mt-4">
                        <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900"  >FullName</label> 
                        <div className="mt-2">
                            <input type="text" name="fullName" onChange={handleFullname} id="fullName" value={fullName} className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className="mt-5">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900" >Username</label>
                        <div className="mt-2" >
                            <input type="text" name="username" onChange={handleUsername} id="username" value={username} className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>  
                    </div>
                    <div className="mt-5">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" >Password</label>
                        <div className="mt-2" >
                            <input type="text" name="password" onChange={handlePassword} id="password" value={password} className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900" >Department</label>
                        <div className="mt-2" >
                            <input type="text" name="department" onChange={handleDepartment} id="department" value={department} className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="designation" className="block text-sm font-medium leading-6 text-gray-900" >Designation</label>
                        <div className="mt-2">
                            <input type="text" name="designation" onChange={handleDesignation} id="designation" value={designation} className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />    
                        </div>
                    </div>
               
                    <div className="mt-5">
                        <button type="submit" onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )

}