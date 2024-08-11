import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";


export default  function DetailNotePage() {

    const { noteId } = useParams()
    const location = useLocation()
    const data = location.state
    const [note, setNotes] = useState([])
    console.log("helllllllllllll",data)
  

    return (
        <div className="noteMy">
            
            
            <embed className="thisNote" src={data.notesFile}
                type="application/pdf"
                frameBorder="0"
                scrolling="auto"
                height="500px"
                width="70%"
                controls
                allowFullScreen>
              
            </embed>
            <h2>{data.title}</h2>
            <p><span>{data.user.designation}</span> {data.user.fullName}</p>
            <p>{data.subject}</p>
        </div>
    )


}