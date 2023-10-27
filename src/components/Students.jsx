import React,{useState,useEffect}from "react";
import axios from "axios";
import { Grid,Card,CardContent } from "@mui/material";
export const Students=()=>{
    const [data,setData]=useState([]);
    const  getStudent=async()=>{
    const result=await axios.get("http://localhost:5050/allstudents");
    setData(result.data);
    }
    useEffect(()=>{
        getStudent()
    },[]);
    return(
      <Grid container spacing={2} sx={{marginTop:"10px"}}>
        {
            data.map((item)=>{
            return(
             <Grid item xs={3}>
            <Card sx={{textAlign:"center",borderRadius:"25px",bgcolor:"darkkhaki"}}>
                <CardContent>
                  <div style={{height:"30px",width:"30px",backgroundColor:item.house,borderRadius:"500%",marginLeft:"160px"}}></div>
                  <br />
                  <br />
                    <img src="data:image/png;base64,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" alt="" />
                  <h3>{`Name:${item.name}`} </h3>
                  <h4>{`Class:${item.clas}`}</h4>
                  <h5>{`Div:${item.div}`}</h5>
                </CardContent>
            </Card>
                    </Grid>

              )})
        }
      </Grid>
    )
}