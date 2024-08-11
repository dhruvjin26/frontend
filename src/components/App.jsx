import {  useState } from 'react'


import RootLayout from './layouts/rootLayout/rootLayout.jsx'
import { createRoutesFromElements,createBrowserRouter,RouterProvider, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import DepartmentLayout from './layouts/departmentLayout/DepartmentLayout.jsx'
import VideosPage from './pages/videos/VideosPage.jsx'
import DetailVideoPage from './pages/videos/DetailVideoPage.jsx'
import NotesPage from './pages/notes/NotesPage.jsx'
import DetailNotePage from './pages/notes/DetailNotesPage.jsx'
import Admin from './pages/Admin.jsx'
import LoginPage from './pages/professors/LoginPage.jsx'
import DashboardLayout from './pages/dashboard/DashboardLayout.jsx'
import ChangePassword from './pages/dashboard/ChangePassword.jsx'
import UploadVideo from './pages/dashboard/UploadVideo.jsx'
import UploadNotes from './pages/dashboard/UploadNotes.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >

      <Route path='/' element={<Home />} />
      <Route path='/:department' element={<DepartmentLayout />} >
      
          <Route path='videos' element={<VideosPage />} />
          <Route path='videos/:videoId' element={<DetailVideoPage />} />
          <Route path='notes' element={<NotesPage />} />
          <Route path='notes/:notesId' element={<DetailNotePage />} />

      </Route>
      <Route path='/admin' element={ <Admin /> } />
      <Route path='/login' element={ <LoginPage /> } />
      <Route path='/dashboard' element={ <DashboardLayout /> } >
        <Route path='change-password' element={<ChangePassword />}/>
        <Route path='uploadVideo' element={<UploadVideo />}/>
        <Route path='uploadNotes' element={<UploadNotes />}/>
        
      </Route>   
    </Route> 
  )
)


function App(){
  return (
      <RouterProvider router={router} />
  )
  }

export default App
