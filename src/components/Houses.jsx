import React,{useState,useEffect}from "react";
import axios from "axios";
import { Grid,Card,CardContent } from "@mui/material";
export const Houses=()=>{
    const [data,setData]=useState([]);
    const  getClasses=async()=>{
    const result=await axios.get("http://localhost:5050/allhouses");
    setData(result.data);
    }
    useEffect(()=>{
        getClasses()
    },[]);
    return(
      <Grid container spacing={2} sx={{marginTop:"10px"}}>
        {
            data.map((item)=>{
            return(
             <Grid item xs={3}>
            <Card sx={{bgcolor:item.name,textAlign:"center"}}>
                <CardContent>
                  <h1>{item.name}</h1>
                </CardContent>
            </Card>
                    </Grid>

              )})
        }
      </Grid>
    )
}