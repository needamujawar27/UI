import React,{useState} from 'react';
import {Grid,TextField,Button,Alert} from "@mui/material"
import axios from 'axios';
const AddUser = () => {
    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");
    const[email,setEmail]=useState("");
    const[age,setAge]=useState("");
    const[phone,setPhone]=useState("");

    
    const handleSubmit=()=>{
        const payload={fname,lname,email,phone,age}
        const result=axios.post("http://localhost:4030/addusers",payload)
        setFname("");
        setLname("");
        setEmail("");
        setAge("");
        setPhone("");
    }

    return (
        <Grid container spacing={2} sx={{marginTop:"10px",padding:"2px"}}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <TextField onChange={(e)=>setFname(e.target.value)} variant='outlined' label="Enter fname" fullWidth value={fname}/>
                <TextField onChange={(e)=>setLname(e.target.value)} variant='outlined' label="Enter lName" fullWidth value={lname}/>
                <TextField onChange={(e)=>setEmail(e.target.value)} variant='outlined' label="Enter Email" fullWidth value={email}/>
                <TextField onChange={(e)=>setPhone(e.target.value)} variant='outlined' label="Phone" fullWidth value={phone}/>
                <TextField onChange={(e)=>setAge(e.target.value)} variant='outlined' label="Age" fullWidth value={age}/>
                <Button onClick={handleSubmit} variant="contained" color='secondary' fullWidth>Submit</Button>
                 </Grid>
                 <Grid item xs={4}></Grid>
        </Grid>
    );
};

export default AddUser;