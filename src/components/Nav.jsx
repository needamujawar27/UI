import React from 'react';
import {Card,CardContent,Grid,Button} from "@mui/material";
import { NavData } from './NavData';
import {Link} from "react-router-dom"
const Nav = () => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    {
                        NavData.map((item)=>
                        <Grid item xs={item.xs}>
                            <Link to={item.path}>
                            <Button variant="contained" fullWidth>{item.label}</Button>
                            </Link>
                        </Grid>
                        )
                    }
                </Grid>
            </CardContent>
        </Card>    
    );
};

export default Nav;