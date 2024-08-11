import React from "react";
import { Link } from "react-router-dom";



export default function Department(props) {


  



    return (
        <Link to={props.name} >
            <div className="myDepartment">
                <img src={props.src} alt="" />
                <p>{props.name}</p>
            </div>
        </Link>
    )
}