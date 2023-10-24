import React,{useState,useEffect} from 'react';
import { Grid,Card,CardContent } from '@mui/material';
import axios from "axios";

const ShowUser = ()=>{
    const [data,setData]=useState([]);

    const getApi=async()=>{
        const result=await axios.get("http://localhost:4030/showusers");
        setData(result.data)
    }
    useEffect(()=>{
      getApi();
    },[]);
    
    return (
       <Grid container spacing={2} >
        {
            data.map((item)=>{
                return(
                <Grid item xs={4}>
                    <Card sx={{bgcolor:"lavender"}}>
                        <CardContent>
                            <h3>{item.fname} {item.lname}</h3>
                            <h5>{item.email}</h5>
                            <h6>{item.age}</h6>
                            <h6>{item.phone}</h6>
                        </CardContent>
                    </Card>

                </Grid>
                );
            })
        }
       </Grid> 
    );
};

export default ShowUser;