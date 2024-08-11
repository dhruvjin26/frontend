import React  from "react";
import { Link,useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

export default function DashboardLayout() {
    
    const navigate = useNavigate()

    const handleSubmit = (event) => {
            
        axios.post('/api/v1/users/logout')
        .then( (response) => {
       console.log(response.data)
       alert('Logged Out Successfully')})
       navigate('/login')
    .catch ( (error) => {
       console.log(error)
       const htmlContent = error.response.data

       const parser = new DOMParser()
       const doc = parser.parseFromString(htmlContent, 'text/html')

       const preTag = doc.querySelector('pre')
       const errorMessage = preTag ? preTag.textContent : 'Unknown error occurred'
       alert(errorMessage)
       navigate('/login')
       
   })
}


    return (
        <div className="department-layout">
            <header className="thisheader">
                <nav className="flex justify-end"> 
                    <Link to="change-password" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white active:bg-gray-700 focus:bg-gray-700" >ChangePassword</Link>
                    <Link to="uploadVideo" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" >UploadVideo</Link>
                    <Link to="uploadNotes" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" >UploadNotes</Link>
                    <button to="logout" type="submit" onClick={handleSubmit} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" >Logout</button>
                </nav>
            </header> 
            <Outlet />
        </div>
        
    )
}   