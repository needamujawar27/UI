import React,{useEffect,useState} from "react";
import {Grid,Card,CardContent} from "@mui/material";
import axios from "axios";

export const ShowDetailStudent=()=>{
    const[data,setData]=useState([]);
    const getData=()=>{
    const result=axios.get("http://localhost:5050/addetail");
    setData(result.data)
    }
    useEffect(()=>{
    getData()
    },[])
       
    }
    return(
    <Grid container spacing={2}>
      {
        data.map((item)=>{
            return(
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <h3>{item.fname}</h3>
                            <h3>{item.lname}</h3>
                            <h3>{item.mobile}</h3>
                            <h3>{item.city}</h3>
                            <h3>{item.pincode}</h3>
                            <h3>{item.state}</h3>
                        </CardContent>
                    </Card>
                </Grid>
            )
        })
      }
    </Grid>
    )
}