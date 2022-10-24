import { Stack } from "@mui/system";
import React from "react"; 
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Appbar from "./components/appbar";
import Home from "./components/home";
import Bottom from "./components/bottombar";
import Hostels from "./components/hostels";
import Comm from "./components/comm";
import Social from "./components/social";
import Spirit from "./components/spirit";
import Sports from "./components/sports";
import Admin from "./components/admin"

export default function App(){
    return(
    <Stack>
       <BrowserRouter>
     
     <Appbar/>
    
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/communications' element={<Comm/>}/>
      <Route path='/hostels' element={<Hostels/>}/>
      <Route path='/sports' element={<Sports/>}/>
      <Route path='/spirit' element={<Spirit/>}/>
      <Route path='/social' element={<Social/>}/>
      <Route path='/admin' element={<Admin/>}/>
     
   
     </Routes>
    
    
   </BrowserRouter>
    </Stack>  

    )
}