import React from "react";
import pdfLogo from "/pdf-svgrepo-com.svg"


export default function NotesFirst(props) {
    console.log(props)
    return(

        <div className="notesFirst ">
            <div className="shadow-md rounded-xl border-2 p-2">
            <img src={pdfLogo} className="logo inline-block " alt="React logo" />
            <h3 className="inline-block ml-2 "> <span className="font-bold">{props.title}</span>, {props.subject}</h3></div>
            <p className="ml-10">By <span>{props.designation}</span> {props.user}</p>
            
        </div>
    )

}