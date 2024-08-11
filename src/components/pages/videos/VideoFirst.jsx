import React from "react";


export default function VideoFirst(props) {
    console.log(props)
    return(

        <div className="videoFirst w-96 ">
            
            <img className="videoName w-96 h-56 rounded-xl shadow-md " src= {props.thumbnail}
                type="video/mp4"
                frameBorder="0"
                scrolling="auto"
                
                margin-left="40px" />
            <div className="mt-1 ml-2">
                <h1 className="text-2xl font-bold">{props.title}</h1>
                <p className="font-light text-sm font-mono ">{props.description}</p>
                <p className="text-sm font-mono ">{props.subject}</p>
            </div>

        </div>
    )

}