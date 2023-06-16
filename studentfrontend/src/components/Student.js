import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, paperstyle } from '@material-ui/core';

export default function BasicTextFields() 
{
    const paperstyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=React.useState('')
    const[address,setAddress]=React.useState('')
    const[student,setStudents]=React.useState([])
    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,address}
        console.log(student)
        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        
    }).then(()=>{
        console.log("New Student Added")
    })
}

React.useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setStudents(result);
    })
},{})

  return (
    <Container>
        <Paper elevation={3} style={paperstyle}>
            <h1 style={{color:'blue'}}>Add Student</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" 
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <TextField id="filled-basic" label="Student Address" variant="outlined"
      value={address}
      onChange={(e)=>setAddress(e.target.value)} />
      <Button variant="contained" onClick={handleClick}>
        Submit</Button>
    </Box>
    </Paper>

    <h1>Students</h1>

<Paper elevation={3} style={paperstyle}>

  {student.map(student=>(
    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
     Id:{student.id}<br/>
     Name:{student.name}<br/>
     Address:{student.address}

    </Paper>
  ))
}


</Paper>

    </Container>
  );
}
