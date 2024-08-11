import axios from "axios";
import React, { useState } from "react";



export default function UploadVideo() {


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [videoFile, setVideoFile] = useState(null)
    const [thumbnail, setThumbnail] = useState(null)
    const [subject, setSubject] = useState('')
    const [sem, setSem] = useState('')

    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleDescriptionChange = (e) => setDescription(e.target.value)
    const handleVideoFileChange = (e) => setVideoFile(e.target.files[0])
    const handleThumbnailChange = (e) => setThumbnail(e.target.files[0])
    const handleSubjectChange = (e) => setSubject(e.target.value)
    const handleSemChange = (e) => setSem(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validate the input fields if necessary

        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('videoFile', videoFile)
        formData.append('thumbnail', thumbnail)
        formData.append('subject', subject)
        formData.append('sem', sem)

        try {
            const response = await axios.post('/api/v1/videos/uploadVideo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(response.data)
            alert('Video uploaded successfully')
        } catch (error) {
            console.error(error)
            alert('Video upload failed')
        }
    
    }
    //////

   
    


    return(
        <div className="uploadVideo">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                    <h4 className="text-base font-semibold leading-7 text-gray-900" >Enter the Videos Details</h4>

            <form action="">
                <div className="mt-4">
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900" >Title</label>
                        <div className="mt-2">
                            <input type="text" name="title" onChange={handleTitleChange} id="title" value={title} className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                </div>

                <div className="mt-5">
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900" >Description</label>
                    
                    <div className="mt-2" >
                        <textarea name="description" id="description" placeholder="    Write a description about the video" onChange={handleDescriptionChange} value={description} rows="3" className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>  
                </div>
                <div className="mt-5">
                    <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900" >Subject</label>
                    <div className="mt-2" >
                        <input type="text" name="subject" onChange={handleSubjectChange} id="subject" value={subject} className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className="mt-5">
                    <label htmlFor="sem" className="block text-sm font-medium leading-6 text-gray-900"  >Sem</label>
                    <div className="mt-2" >
                        <input type="text" name="sem" onChange={handleSemChange} id="sem" value={sem} className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className="mt-5">
                    <label htmlFor="videoFile" className="block text-sm font-medium leading-6 text-gray-900" >VideoFile</label>
                    <div className="mt-2">
                        <input type="file" name="videoFile" onChange={handleVideoFileChange} id="videoFile"  />     
                    </div>
                </div>
                <div className="mt-5">
                    <label htmlFor="thumbnail" className="block text-sm font-medium leading-6 text-gray-900" >Thumbnail</label>
                    <div className="mt-2">
                        <input type="file" name="thumbnail" onChange={handleThumbnailChange} id="thumbnail"  />
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