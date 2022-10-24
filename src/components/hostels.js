import React,{useState, useEffect} from 'react'
import '../App.css'
import {Stack, Typography, Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material'

import { collection, getDocs,doc, getFirestore} from 'firebase/firestore'
import app from '../firebase-config'
import { DoubleArrow, Phone } from '@material-ui/icons'



function Hostels(){
 
  
  
 
  let db= getFirestore(app)
 

 let table = collection(db, "hostels")
  const [free, setFree]=useState([])
   useEffect(()=>{

     ;(async()=>{
      const raw_data=await getDocs(table)
     
      
      
        const show=raw_data.docs.map((doc)=> doc.data())
        
        console.log(show)
        //setOpen(false)
        setFree(show)
        
        //document.getElementById('loading').style.display="none"
     

      

      
     })()
   
   },[])


  
   
 
  return(

   
   <Box className="main" sx={{width:"100%", marginTop:"5px", background:"wheat" ,height:"360vh" }}>
    <Box textAlign="center" marginTop="100px" ></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>



   

     <Box sx={{backgroundColor:"rgb(16, 16, 83)", margin:"5px"}}>
      <TableContainer >
      <Table>
        <TableHead>
          <TableRow >
            <TableCell sx={{textAlign:"center" ,fontSize:"19px",fontWeight:"bold", fontFamily:"Arial, Helvetica, sans-serif", color:"white"}}>S/N</TableCell>
          
            <TableCell sx={{textAlign:"justify",fontSize:"19px",fontWeight:"bold", fontFamily:"Arial, Helvetica, sans-serif", color:"white"}}>HOSTELS</TableCell>
            <TableCell sx={{textAlign:"center",fontSize:"19px",fontWeight:"bold", fontFamily:"Arial, Helvetica, sans-serif", color:"white"}}>CONTACTS</TableCell>
          </TableRow>
         
        </TableHead>
        
        <TableBody>
       
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>1</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>OWEN</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>
         
        </TableBody>

        <TableBody>
                
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>2</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>FLORIDA</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>

       </TableBody>

            
        <TableBody>
       
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>3</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>BASMA</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>
         
        </TableBody>

        <TableBody>
                
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>4</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>MABER</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>

       </TableBody>
            
        <TableBody>
       
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>5</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>UVH</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>
         
        </TableBody>

        <TableBody>
                
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>6</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>REGINA</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>

       </TableBody>

        <TableBody>
       
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>7</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>D'LABWON</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>
         
        </TableBody>

        <TableBody>
                
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>8</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>STAR LIGHT</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>

       </TableBody>

            
        <TableBody>
       
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>9</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>ZION</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>
         
        </TableBody>

        <TableBody>
                
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>10</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>TEM GUMI</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>

       </TableBody>
            
        <TableBody>
       
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>11</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>PIONEER</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>
         
        </TableBody>

        <TableBody>
                
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>12</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>NEW AUGUSTA</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>

       </TableBody>

        <TableBody>
       
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>13</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>COMFORT</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>
         
        </TableBody>

        <TableBody>
                
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>14</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>TEXAS</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>

       </TableBody>

            
        <TableBody>
       
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>15</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>WHITE HOUSE</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>
         
        </TableBody>

        <TableBody>
                
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>16</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>GREEN PARK</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>

       </TableBody>
            
        <TableBody>
       
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>17</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>OCER</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>
         
        </TableBody>

        <TableBody>
                
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>18</TableCell>
                  <TableCell sx={{textAlign:"justify",color:"wheat"}}>OASIS</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>0785xxxxxx </TableCell>
                </TableRow>

       </TableBody>


      </Table>
    </TableContainer>
      
      </Box>
    
      <Box>
     


 
    <Typography textAlign="center" marginTop="40px" fontSize="24px" fontWeight="bold">HOSTELS WITH FREE ROOMS</Typography>

    {
            free.map(hostels=>{
              
              return(
    <Box backgroundColor="rgb(11, 11, 42)" margin="4px" height="27vh" paddingTop="5px" marginBottom="26px">
      <Typography backgroundColor="darkblue" border="1px solid white" textAlign="center" color="white" padding="3px" margin="4px" >{hostels.hname}</Typography>
      <Box border="1px solid white" height="20vh" margin="5px" >
        <Stack color="white" width="270px" margin="auto" gap="1.5em">
        <Typography>SINGLE ROOMS AVAILABLE:{hostels.single}</Typography>
        <Typography>SINGLE ROOMS AVAILABLE:{hostels.double}</Typography>
        <Typography ><Phone/>{hostels.contact}</Typography>
        
        </Stack>


      </Box>
  
    </Box>

   
)
})
}


</Box>
</Box>
   
  )
}

export default Hostels

