import React, {useState} from 'react'
import '../App.css'
import { Box,Typography, Stack, Button, TextField } from '@mui/material'
import app from '../firebase-config'
import {collection, addDoc,getFirestore} from 'firebase/firestore'





function Admin(){
  const [hname, setHname] = useState("")
const [single, setSingle] = useState("")
const [double, setDouble] = useState("")
const [contact, setContact] = useState("")

  const db=getFirestore(app)

  const SubmitForm= async(e) =>{
    e.preventDefault()
 

  let data={hname, single, double, contact}

  let store=await addDoc(collection(db, "hostels"), {hname:data.hname, single:data.single, double:data.double, contact:data.contact})
   
    if(store){
      console.log("sent")
    }

    else{
      console.log("not sent")
    }
  }

  return(

   
  
    <Box textAlign="center" marginTop="100px" >
    <Box textAlign="center"></Box>
    <Typography textAlign="center">ADMIN CONSOLE</Typography>
    <Typography textAlign="center" marginTop="60px">POST AND VIEW DATA</Typography>
    <Typography textAlign="center">ADD HOSTEL WITH FREE ROOMS</Typography>
      <form onSubmit={SubmitForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="270px" margin="auto" gap="2em">
            <TextField label="hostel name" value={hname} onChange={(e)=>setHname(e.target.value)}></TextField>
            <TextField label="Single rooms" value={single} onChange={(e)=>setSingle(e.target.value)}></TextField>
            <TextField label="Double rooms" value={double} onChange={(e)=>setDouble(e.target.value)}></TextField>
            <TextField label="tel no" value={contact} onChange={(e)=>setContact(e.target.value)}></TextField>

            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>



    
    </Box>
 
   
  )
}

export default Admin