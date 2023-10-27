import React,{useState} from "react";
import { Grid,Card,CardContent,TextField,Button } from "@mui/material";
import {useNavigate} from "react-router-dom"
import axios from "axios";
export const AddGames=()=>{
    const[name,setName]=useState("");
    const navigate=useNavigate();

    const handleAdd=async()=>{
    const payload={name};
    await axios.post("http://localhost:5050/addgame",payload);
    navigate("/game")
    }
    return(
<Card>
    <CardContent>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <TextField onChange={(e)=>setName(e.target.value)} variant="outlined" label="Enter Games Name..." fullWidth></TextField>
            </Grid>
            <Grid item xs={4}>
                <Button onClick={handleAdd} variant="contained" fullWidth color="secondary" sx={{height:"55"}}>Add</Button>
            </Grid>
        </Grid>
    </CardContent>
</Card>
    )

}