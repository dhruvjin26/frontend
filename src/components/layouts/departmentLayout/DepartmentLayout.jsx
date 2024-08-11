import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";



export default function DepartmentLayout(props) {

    const { department } = useParams()

    return (

        <div className="mx-auto" >
            <div className="department-layout">
                <header className="thisheader">
                <nav className="flex justify-end"> 
                    <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ">{department}</a>
                    
                    <NavLink to="videos" state={department} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" >Videos</NavLink>
                    <NavLink to="notes" state={department} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" >Notes</NavLink>
                </nav>
            </header> 
            <Outlet />
            </div>
            
        </div>
    )
}