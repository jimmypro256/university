import React, { useState } from 'react'
import '../App.css'
import { Box } from '@mui/system'
import { Typography,Stack,Avatar,Modal,TextField,Button, Tooltip,Fab, Backdrop, CircularProgress, Snackbar, IconButton, Divider  } from '@mui/material'
import CloseIcon from '@material-ui/icons/Close'

import AddIcon from '@material-ui/icons/Add'
import app from '../firebase-config'
import {collection, addDoc,getFirestore} from 'firebase/firestore'
import PhoneIcon from '@material-ui/icons/Phone'
import SimpleAccordion from './accordion'




function Home(){
  const[open, setOpen]=useState(false)
  const [name, setName] = useState("")
    const [faculty, setFaculty] = useState("")
    const [comment, setComment] = useState("")
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)

    const db =getFirestore(app)


  const SubmitForm= async(e) =>{
    e.preventDefault()
    setOpen1(true)
    setOpen(false)
    let datas={name, faculty, comment}
   let send= await addDoc(collection(db,"suggestions"), {name:datas.name, faculty:datas.faculty, comment:datas.comment})

   if(send){
     setOpen1(false)
     setOpen2(true)
   }
   else{
   setOpen1(false)
   }
}
const handleClose = ()=>{
    setOpen2(false)
}

const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  
 
  return(

   
   <Box className="main" sx={{width:"100%", marginTop:"5px", background:"rgb(250, 241, 229)" ,height:"650vh"}}>
    <Box textAlign="center" marginTop="50px" ></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    
    
  


    <Box border="3px solid darkblue" height="60vh" margin="5px" paddingTop="60px">
      <Box height="30vh" sx={{margin:"auto" , width:"290px" }} ><img style={{width:"100%", height:"50vh", boxShadow:"0 0 10px gray", border:"1px solid blue"}} src={require('../images/TTT.PNG')} /></Box>
      <Box height="30vh" >
        <Typography textAlign="center" fontWeight="bold" fontSize="24px">GULU UNIVERSITY</Typography>
        <Typography textAlign="center">"for community transformation"</Typography>
      </Box>
    </Box>
      
      <div className='cabinet' >
            <Box margin="10px" padding="3px" boxShadow="0 0 10px gray" backgroundColor="rgb(16, 16, 83)" color="white">
            <Typography textAlign="center" fontWeight="bold" fontSize="24px" border="1px solid white" >21<sup>st</sup> GUILD GOVERNMENT</Typography>
            <Typography textAlign="center" margin="10px">"Operation Guild Rescue"</Typography>
            </Box>



            <Box height="60vh" margin="5px" boxShadow="0 0 10px gray" paddingTop="10px" border="1px solid blue">

                    <Stack border="1px solid white" height="55vh" margin="10px" >
                    <Stack width="300px" margin="auto" alignItems="center">
                    <img style={{width:"100%", height:"45vh", boxShadow:"0 0 10px gray", border:"1px solid blue"}} src={require('../images/blue.jpg')} />
              <Typography height="10vh" boxShadow="0 0 5px black" backgroundColor="rgb(16, 16, 83)" color="white" sx={{width:"300px", textAlign:"center" ,border:"2px solid black"}}>GUILD PRESIDENT<br></br> H.E xxxxxxxxxxxxxxxxxxxxxxxx</Typography>

            </Stack>
                    </Stack>
                </Box>


       

     
      </div>
   
     <Box margin="7px" >
     <Typography textAlign="center" backgroundColor=" rgb(16, 16, 83)" color="white" marginTop="10px" marginBottom="10px"  border="2px solid white"  fontWeight="bold" fontSize="21px" padding="4px">GUILD LEADERSHIP</Typography>
     <SimpleAccordion sx={{border:"1px solid rgb(16, 16, 83)"}}/>
     </Box>


     
   

      <Tooltip title="suggestion box" sx={{position:"fixed", bottom:"4em", right:"4em"}}>
                    <Fab onClick={()=>setOpen(true)} color="primary"><AddIcon/></Fab>
            </Tooltip>
            <Backdrop open={open1} sx={{color:"fff"}}>
                <CircularProgress sx={{color:"white"}}/>
            </Backdrop>
            <Snackbar action={action} autoHideDuration={3000} open={open2} message="sent   successfully!!"></Snackbar>


            <Modal open={open} onClose={()=>setOpen(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>

            <Box  sx={{width:"300px",backgroundColor:"white", padding:"1em", borderRadius:"1em", border:"none", outline:"none"}}>
                       <Stack sx={{gap:1}}>
                       
                        <form onSubmit={SubmitForm}>
                          <Stack sx={{gap:2}}>
                            <Typography textAlign="center">SUGGESTION BOX</Typography>
                          <Box width="200px" margin="auto">
                          <img style={{width:"200px", height:"16vh"}} src={require('../images/HowTo.png')} />
                          </Box>
                          <TextField value={name} onChange={(e)=> setName(e.target.value)} label="full name" ></TextField>
                          <TextField value={faculty} onChange={(e)=> setFaculty(e.target.value)}  label="faculty" ></TextField>
                          <TextField value={comment} onChange={(e)=> setComment(e.target.value)} label="comment" multiline></TextField>
                          <Button type="submit" variant='contained'>send</Button>
                          </Stack>
                         
                        </form>
                       
                        </Stack> 
                        
                       
                    </Box>
            </Modal>


            <Box height="50vh" margin="5px" border="2px solid rgb(16, 16, 83)" paddingTop="10px" backgroundColor="">

                 <Stack boxShadow="0 0 10px gray" height="45vh" margin="10px" >

                  <Typography margin="0px" textAlign="center">image here</Typography>

                 </Stack>
            </Box>


            <Box height="120vh" margin="5px" boxShadow="0 0 10px gray" paddingTop="10px">

                <Stack border="2px solid rgb(16, 16, 83)" height="115vh" margin="10px" >
                <Typography textAlign="center" backgroundColor="rgb(16, 16, 83)" color="white" margin="10px"  border="1px solid white"  fontWeight="bold" fontSize="21px">UPCOMING ACTIVITIES AND EVENTS</Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center" padding="3px" boxShadow="0 0 5px rgb(16, 16, 83)" margin="10px" height="10vh" >
                    <Typography fontSize="19px" margin="3px" fontWeight="bold">Council meeting</Typography>
                    <Typography margin="3px">20th/10/2022</Typography>
                  </Box>

                  <Box display="flex" justifyContent="space-between" alignItems="center" padding="3px" boxShadow="0 0 5px rgb(16, 16, 83)" margin="10px" height="10vh" >
                    <Typography fontSize="19px" margin="3px" fontWeight="bold">Council meeting</Typography>
                    <Typography margin="3px">20th/10/2022</Typography>
                  </Box>

                  <Box display="flex" justifyContent="space-between" alignItems="center" padding="3px" boxShadow="0 0 5px rgb(16, 16, 83)" margin="10px" height="10vh" >
                    <Typography fontSize="19px" margin="3px" fontWeight="bold">Council meeting</Typography>
                    <Typography margin="3px">20th/10/2022</Typography>
                  </Box>

                  <Box display="flex" justifyContent="space-between" alignItems="center" padding="3px" boxShadow="0 0 5px rgb(16, 16, 83)" margin="10px" height="10vh" >
                    <Typography fontSize="19px" margin="3px" fontWeight="bold">Council meeting</Typography>
                    <Typography margin="3px">20th/10/2022</Typography>
                  </Box>

                  <Box display="flex" justifyContent="space-between" alignItems="center" padding="3px" boxShadow="0 0 5px rgb(16, 16, 83)" margin="10px" height="10vh" >
                    <Typography fontSize="19px" margin="3px" fontWeight="bold">Council meeting</Typography>
                    <Typography margin="3px">20th/10/2022</Typography>
                  </Box>


                 

                </Stack>
            </Box>



            <Box height="220vh" margin="5px" boxShadow="0 0 10px gray" paddingTop="10px">

<Stack border="1px solid darkblue" height="215vh" margin="10px" >
      <Typography textAlign="center" padding="3px" margin="10px"  border="1px solid white" backgroundColor="rgb(16, 16, 83)" fontWeight="bold" color="white" fontSize="21px">RECENT COMMUNICATIONS</Typography>


      <Box  sx={{backgroundColor:"rgb(16, 16, 83)", height:"60vh", margin:"5px", paddingTop:"6px"}}>
      <Stack sx={{margin:"15px", gap:"1em"}}>
        <Box sx={{backgroundColor:"darkblue", color:"wheat", height:"6vh",padding:"4px", margin:"5px",display:"flex", justifyContent:"space-between",alignItems:"center" , border:"1px solid gray"}}>
        <Typography sx={{margin:"7px" }}>TO ALL THE STUDENTS</Typography>
        <Typography sx={{ color:"white", margin:"7px"}}>23<sup>rd</sup>/10/2022</Typography>
        </Box>

        <Box border="1px solid grey" height="40vh">
        
        <Typography sx={{ color:"wheat", margin:"7px"}}>this is to inform all the students that mmmmmmmm ffffffffffff  fffffff  gggggggg  ggggg</Typography>
        </Box>
      </Stack>
      </Box>

      <Box  sx={{backgroundColor:"rgb(16, 16, 83)", height:"60vh", margin:"5px", paddingTop:"6px"}}>
      <Stack sx={{margin:"15px", gap:"1em"}}>
        <Box sx={{backgroundColor:"darkblue", color:"wheat", height:"6vh",padding:"4px", margin:"5px",display:"flex", justifyContent:"space-between",alignItems:"center" , border:"1px solid gray"}}>
        <Typography sx={{margin:"7px" }}>TO ALL THE STUDENTS</Typography>
        <Typography sx={{ color:"white", margin:"7px"}}>23<sup>rd</sup>/10/2022</Typography>
        </Box>

        <Box border="1px solid grey" height="40vh">
        
        <Typography sx={{ color:"wheat", margin:"7px"}}>this is to inform all the students that mmmmmmmm ffffffffffff  fffffff  gggggggg  ggggg</Typography>
        </Box>
      </Stack>
      </Box>



      <Box  sx={{backgroundColor:"rgb(16, 16, 83)", height:"60vh", margin:"5px", paddingTop:"6px"}}>
      <Stack sx={{margin:"15px", gap:"1em"}}>
        <Box sx={{backgroundColor:"darkblue", color:"wheat", height:"6vh",padding:"4px", margin:"5px",display:"flex", justifyContent:"space-between",alignItems:"center" , border:"1px solid gray"}}>
        <Typography sx={{margin:"7px" }}>TO ALL THE STUDENTS</Typography>
        <Typography sx={{ color:"white", margin:"7px"}}>23<sup>rd</sup>/10/2022</Typography>
        </Box>

        <Box border="1px solid grey" height="40vh">
        
        <Typography sx={{ color:"wheat", margin:"7px"}}>this is to inform all the students that mmmmmmmm ffffffffffff  fffffff  gggggggg  ggggg</Typography>
        </Box>
      </Stack>
      </Box>
  
</Stack>
</Box>

<Box height="10vh" margin="5px" border="3px solid darkblue" marginTop="60px" backgroundColor="black" color="white" boxShadow="0 0 12px black">
  <Typography textAlign="center" margin="5px">For any emergency issues <br></br> <PhoneIcon/>+256 785xxxxxxxxx</Typography>
</Box>
  
   </Box>
   
  )
}

export default Home