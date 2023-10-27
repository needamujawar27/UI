import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './Nav';
import AddUser from './AddUser';
import ShowUser from './ShowUser';
import { Classes } from './Classes';
import { Division } from './Division';
import { Houses } from './Houses';
import { Students } from './Students';
import { AddStudents } from './AddStudents';
import { AddDivision } from './AddDivision';
import { AddClasses } from './AddClasses';
import { AddHouse } from './AddHouse';
import { Games } from './Games';
import { AddGames } from './AddGames';
import { AddStudentsDetail } from './AddStudentDetail';
import { ShowDetailStudent } from './ShowDetailStudent';
const Landing=() =>{
    return (
     <BrowserRouter>
     <Nav/>
     <Routes>
        <Route path='/' element={<AddUser/>}/>
        <Route path='/showuser' element={<ShowUser/>}/>
        <Route path="/addclass" element={<AddClasses/>}/>
        <Route path='/class' element={<Classes/>}/>
        <Route path='/adddiv' element={<AddDivision/>}/>
        <Route path='/divs' element={<Division/>}/>
        <Route path='/addhouse' element={<AddHouse/> }/>
        <Route path='/houses' element={<Houses/>}/>
        <Route path='/stud' element={<Students/>}/>
        <Route path='/addstud' element={<AddStudents/>}/>
        <Route path='/game' element={<Games/>}/>
        <Route path='/addgame' element={<AddGames/>}/>
        <Route path='/studentdetail' element={<AddStudentsDetail/>}/>
        <Route path='/showdetail' element={<ShowDetailStudent/>}/>

     </Routes>
     </BrowserRouter>       
    );
};

export default Landing;