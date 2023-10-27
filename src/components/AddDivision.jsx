import React,{useState} from "react";
import { Grid,Card,CardContent,TextField,Button } from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const AddDivision=()=>{
    const[name,setName]=useState("");
    //Variable ko assume kiye///
    const Navigate=useNavigate();

    const handleAdd=async()=>{
    const payload={name};
    await axios.post("http://localhost:5050/adddivs",payload);
    ///Variable ko use kiye//
    Navigate("/divs")
    }

    return(
    <Card>
        <CardContent>
            <Grid container spacing={2}>
               <Grid item xs={8}>
                <TextField  onChange={(e)=>setName(e.target.value)} variant="outlined" label="Enter Division" fullWidth></TextField>
               </Grid>
               <Grid item xs={4}>
                <Button onClick={handleAdd} variant="contained" color="secondary" fullWidth sx={{height:"55px"}}>Add</Button>
                </Grid> 
            </Grid>
        </CardContent>
    </Card>
    )
}