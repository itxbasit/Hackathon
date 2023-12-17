import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Form() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div> 
        <TextField
    
          required
          id="outlined-required"
          label="first Name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-disabled"
          label="Last Name"
          defaultValue=""
        />
          <TextField
          required
          id="outlined-disabled"
          label="Course"
          defaultValue=""
        />
        <TextField
        required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
        required
        type= "email"
          id="outlined-read-only-input"
          label="email"
          defaultValue=""
          
        />
        <TextField
        required
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        

       
      </div>

    </Box>
  );
}