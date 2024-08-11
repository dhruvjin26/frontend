import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoFirst from "./VideoFirst";
import { Link, useLocation } from 'react-router-dom';

export default function VideosPage(props) {

    const location = useLocation();
    const dataReceived = location.state;
    
    const [ videos, setVideos ] = useState([])
    const [ subject, setSubject ] = useState('')
    const [ faculty, setFaculty ] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        
        axios.post('/api/v1/videos/selectVideos', { department: dataReceived, subject: subject, faculty: faculty }).then( (response) => {
            setVideos(response.data.data)
        })
        .catch( (error) => {  console.log(error)  })

    }

    const handleSubject = (e) => setSubject(e.target.value)

    const handleFaculty = (e) => setFaculty(e.target.value)

    useEffect( () => {
        console.log('VideosPage useEffect')

        const fetchData = async () => {
            
            axios.post('/api/v1/videos/recentVideos',{department: dataReceived } ).then( (response) => {
            setVideos(response.data.data)
            console.log(response.data.data) 
        })
        .catch( (error) => {  console.log(error)  })

        }
console.log("hello")
         fetchData()

    },[])

    return (
        <div>

            <div className="filter ml-20 mt-8">
                <h4 className="text-base font-semibold leading-7 text-gray-900">Filter Options</h4>
                <form action="" method="" className="mt-3">
                <div className="inline-block">
                    <label htmlFor="subject" className="text-sm font-medium leading-6 text-gray-900">Subject</label>
                    <div>
                        <input type="text" onChange={handleSubject} name="subject" id="subject" className="inline-block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className="inline-block ml-4">
                    <label htmlFor="faculty" className="text-sm font-medium leading-6 text-gray-900">Faculty</label>
                    <div>
                    <input type="text" onChange={handleFaculty} name="faculty" id="faculty" className="inline-block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className="inline-block ml-4">
                    <button type="submit" onClick={handleSubmit} className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" > Submit</button>
                </div>
                </form>

            </div>

            
            <div className="videosPage ml-20 mt-20">
                
                <div className="onlyVideos m-4">
                {
                    videos.map( video => {
                        return <Link to={`${video._id}` } className="curious w-96 h-80 mx-8 float-left" state={video} > 
                            <VideoFirst 
                                key={video._id}
                                id={video._id}
                                title={video.title}
                                thumbnail={video.thumbnail}
                                description={video.owner.fullName}
                                subject={video.subject}   
                            />  </Link>
                  
                    })
                }
                </div>
                 
                 
                    
            </div>
        </div>
    )

}