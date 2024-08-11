import axios from "axios";
import React, { useState } from "react";



export default function UploadNotes() {


    const [title, setTitle] = useState('')
    const [notesFile, setNotesFile] = useState(null)
    const [subject, setSubject] = useState('')
    const [sem, setSem] = useState('')

    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleNotesFileChange = (e) => setNotesFile(e.target.files[0])
    const handleSubjectChange = (e) => setSubject(e.target.value)
    const handleSemChange = (e) => setSem(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validate the input fields if necessary

        const formData = new FormData()
        formData.append('title', title)
        formData.append('notesFile', notesFile)
        formData.append('subject', subject)
        formData.append('sem', sem)

        try {
            const response = await axios.post('/api/v1/notes/uploadNotes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(response.data)
            alert('Notes uploaded successfully')
        } catch (error) {
            console.error(error)
            alert('Notes upload failed')
        }
    
    }
    //////

   
    


    return(
        <div className="uploadVideo">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <h4 className="text-base font-semibold leading-7 text-gray-900" >Enter the Notes Details</h4>

                    <form action="">
                        <div className="mt-4">
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900" >Title</label>
                            <div className="mt-2">
                                <input type="text" name="title" onChange={handleTitleChange} id="title" value={title} className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900"  >Subject</label>
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
                            <label htmlFor="notesFile" className="block text-sm font-medium leading-6 text-gray-900"  >NotesFile</label>
                            <div className="mt-2" >
                                <input type="file" name="notesFile" onChange={handleNotesFileChange} id="notesFile" />
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