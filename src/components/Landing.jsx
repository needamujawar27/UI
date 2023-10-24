import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './Nav';
import AddUser from './AddUser';
import ShowUser from './ShowUser';

const Landing=() =>{
    return (
     <BrowserRouter>
     <Nav/>
     <Routes>
        <Route path='/' element={<AddUser/>}/>
        <Route path='/showuser' element={<ShowUser/>}/>
     </Routes>
     </BrowserRouter>       
    );
};

export default Landing;