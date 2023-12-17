import { Button } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AddButton = () => {
  return (
    
    <div className='flex items-center justify-between '>
  
       <div className='flex items-center' >
        <div ><ArrowBackIcon/></div>
        
        
        <div style={{marginLeft:"2rem"}}><h4 style={{color:'black' , fontSize:'1.5rem' , }}>Add Students</h4></div>
      </div>
    </div>
  )
}

export default AddButton