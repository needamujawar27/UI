import React,{useState,useEffect} from "react";
import {Grid,Card,CardContent} from "@mui/material"
import axios from "axios";

export const Games=()=>{
    const [data,setData]=useState([]);
    const getData=async()=>{
    const result=await axios.get("http://localhost:5050/games");
    setData(result.data)
    }
    useEffect(()=>{
    getData()
    },[])
    return(
    <Grid container spacing={2}>
        {
            data.map((item)=>
                <Grid item xs={3}>
                    <Card sx={{marginTop:"10px",bgcolor:"ivory"}}>
                        <CardContent>
                            <h3>{item.name}</h3>
                        </CardContent>
                    </Card>
                </Grid>
            )
        }
    </Grid>
    )
}