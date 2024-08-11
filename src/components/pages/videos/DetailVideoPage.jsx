import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";


export default  function DetailVideoPage() {

    const { videoId } = useParams()
    const location = useLocation()
    const data = location.state
    const [video, setVideo] = useState([])
    console.log("helllllllllllll",data)

//    async function getVideo() {
//         console.log('DetailVideoPage useEffect')
       
            
//             await axios.get(`/api/v1/videos/${videoId}`)
//             .then( (response) => {
//             console.log(response.data.data[0])
//             setVideo(response.data.data[0])
//         })
//         .catch( (error) => {  console.log(error)  })
    
//     }

        
      

  

    return (
        <div className="videoMy ">
            
            
            <embed className="thisVideo" src={data.videoFile}
                type="video/mp4"
                frameBorder="0"
                scrolling="auto"
                height="500px"
                width="70%"
                controls
                allowFullScreen>
              
            </embed>
            <h1>{data.title}</h1>
            <p><span>{data.owner.designation}</span> {data.owner.fullName}</p>
            <p>{data.description}</p>
        </div>
    )


}