import React,{useState} from "react";
import {Grid,TextField,Button,Card,CardContent, Alert} from "@mui/material";
import axios from "axios";

export const AddStudents=()=>{
    const[name,setName]=useState("");
    const[clas,setClass]=useState("");
    const[div,setDiv]=useState("");
    const[house,setHouse]=useState("");
    const[msg,setMsg]=useState("");

////for payload////
    const handleAdd=async()=>{
        const payload={name,clas,div,house};
        const result= await axios.post("http://localhost:5050/addstudents",payload);
        ////to check on console..////
        // console.log("msg===",msg)
        setMsg(result.data)
        ///after entering it will clear by this...////
        setName("");
        setClass("");
        setDiv("");
        setHouse("")
    };
    setTimeout(()=>{
      setMsg("")
    },3000)
    
    return(
    <Grid container spacing={2}>
    <Grid item xs={4}></Grid>
    <Grid item xs={4}>
        <Card sx={{bgcolor:"azure",marginTop:"10px"}}>
            <CardContent>   
                {
                    msg &&
                <Alert severity="success">{msg}</Alert>   
                }
      <TextField value={name} onChange={(e)=>setName(e.target.value)}  variant="outlined" label="Enter Students Name..." fullWidth></TextField>
      <br />
      <br />
      <TextField value={clas} onChange={(e)=>setClass(e.target.value)} variant="outlined" label="Enter Class.." fullWidth></TextField>
      <br />
      <br />
      <TextField value={div} onChange={(e)=>setDiv(e.target.value)} variant="outlined" label="Enter Division.." fullWidth></TextField>
      <br />
      <br />
      <TextField value={house} onChange={(e)=>setHouse(e.target.value)} variant="outlined" label="Enter House name.." fullWidth></TextField>
      <br />
      <br />
      <Button onClick={handleAdd} variant="contained" fullWidth>Add students</Button>
            </CardContent>
        </Card>
    </Grid>
    <Grid item xs={4}></Grid>
    </Grid>
    )
}