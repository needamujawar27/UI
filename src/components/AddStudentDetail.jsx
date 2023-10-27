import React,{useState} from "react";
import {Grid,Card,CardContent,TextField,Button} from "@mui/material"
import axios from "axios";

export const AddStudentsDetail=()=>{
    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");
    const[mobile,setMobile]=useState("");
    const[city,setCity]=useState("");
    const[state,setState]=useState("");
    
    const payload={fname,lname,mobile,city,pincode,state}
    axios.post("http://localhost:5050/displaydetai",payload) 

    return(
 <Grid container spacing={2}>
    <Grid item xs={4}></Grid>
    <Grid item xs={4}>
        <TextField variant="outlined" label="Enter Fname" fullWidth></TextField>
        <br />
        <br />
        <TextField variant="outlined" label="Enter Lname" fullWidth></TextField>
        <br />
        <br />
        <TextField variant="outlined" label="Enter Mobile" fullWidth></TextField>
        <br />
        <br />
        <TextField variant="outlined" label="Enter City" fullWidth></TextField>
        <br />
        <br />
        <TextField variant="outlined" label="Enter State" fullWidth></TextField>
        <br />
        <br />
        <Button variant="contained" fullWidth>Add</Button>
    </Grid>
 </Grid>
    )
}