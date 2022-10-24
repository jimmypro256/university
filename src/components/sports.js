import React from 'react'
import '../App.css'
import { Box } from '@mui/system'
import {Typography,Stack} from '@mui/material'





function Sports(){

  

  return(

   
   <Box className="main" sx={{width:"100%", marginTop:"15px",height:"480vh", background:"antiquewhite" , color:"black" }}>
    <Box textAlign="center" marginTop="100px" ></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>


<Box sx={{ height:"160vh"}}>
<Typography textAlign="center" >GAMES AND SPORTS AROUND CAMPUS</Typography>
<Box  sx={{backgroundColor:"rgb(16, 16, 83)", height:"50vh", margin:"7px"}}>
  <Stack sx={{margin:"15px", gap:"1em"}}>
    <Typography sx={{ color:"wheat", border:"1px solid gray", height:"3vh",padding:"7px", marginTop:"5px" ,fontSize:"21px", textAlign:"center" }}>GULU UNIVERSITY GAMES UNION</Typography>
    <Typography sx={{ color:"wheat", border:"1px solid grey",height:"40vh"}}><img style={{width:"100%", height:"100%"}} src={require('../images/game1.jpg')} /></Typography>
  </Stack>
</Box>

<Box  sx={{backgroundColor:"rgb(16, 16, 83)", height:"45vh", margin:"5px", paddingTop:"5px", marginTop:"20px"}}>
  <Stack sx={{margin:"15px", gap:"1em"}}>
    <Typography sx={{backgroundColor:"darkblue", color:"wheat",border:"1px solid white", height:"5vh",padding:"4px", margin:"3px",textAlign:"center", fontSize:"22px" }}>NOTICE</Typography>
    <Box sx={{ border:"1px solid grey",height:"30vh"}}>
    <Typography sx={{ color:"wheat", margin:"7px", fontSize:"23px", textAlign:"center", fontWeight:"bold", color:"lawngreen"}}> GULU UNI VS HHHHHHH</Typography>
   <Box width="200px" margin="auto" marginTop="15px" >

   <Typography sx={{ color:"wheat", margin:"7px", fontSize:"22px",  color:"lawngreen"}}>DATE: 15/11/2022</Typography>
    <Typography sx={{ color:"wheat", margin:"7px", fontSize:"23px",  color:"lawngreen"}}>TIME    : 4:00 PM</Typography>
   </Box>
    </Box>
  </Stack>
</Box>





<Typography textAlign="center" fontSize="20px" fontWeight="bold" marginTop="20px">TOURNAMENTS AND FIXTURES</Typography>
<Box color="white" sx={{backgroundColor:"rgb(16, 16, 83)", height:"344vh", margin:"7px"}}>
  <Stack>
    <Stack justifyContent="space-between" alignItems="center" gap="1em" padding="20px" sx={{margin:"7px", border:"1px solid grey"}} >
      <Typography textAlign="center" fontSize="22px" fontWeight="bold">INTERFACULTY GAMES</Typography>
      
    </Stack>
     <Typography textAlign="center" margin="4px" marginTop="20px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">FOOTBALL FIXTURES</Typography>
     <Box backgroundColor="lightgray" border="2px solid darkblue" color="black" margin="5px" height="50vh">
        <Typography margin="140px"  marginBottom="10px" textAlign="center">NO FIXTURES CURRENTLY</Typography>

     </Box>


     <Typography textAlign="center" margin="4px" marginTop="30px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">NETBALL FIXTURES</Typography>
     <Box backgroundColor="lightgray" border="2px solid darkblue" color="black" margin="5px" height="50vh">
        <Typography margin="140px"  marginBottom="10px" textAlign="center">NO FIXTURES CURRENTLY</Typography>

     </Box>



     <Typography textAlign="center" margin="4px" marginTop="30px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">VOLLEYBALL FIXTURES</Typography>
     <Box backgroundColor="lightgray" border="2px solid darkblue" color="black" margin="5px" height="50vh">
        <Typography margin="140px"  marginBottom="10px" textAlign="center">NO FIXTURES CURRENTLY</Typography>

     </Box>


     <Typography textAlign="center" margin="4px" marginTop="30px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">MATCH RESULTS</Typography>
     <Box backgroundColor="lightgray" border="2px solid darkblue" color="black" margin="5px" height="50vh">
        <Typography margin="140px"  marginBottom="10px" textAlign="center">NO MATCHES CURRENTLY</Typography>

     </Box>


     <Typography textAlign="center" margin="4px" marginTop="30px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">TABLE STANDING</Typography>
     <Box backgroundColor="lightgray" border="2px solid darkblue" color="black" margin="5px" height="70vh">
        <Typography margin="140px"  marginBottom="10px" textAlign="center">NOT AVAILABLE CURRENTLY</Typography>

     </Box>
    
  </Stack>
</Box>

</Box>
    

    
   </Box>
   
  )
}

export default Sports