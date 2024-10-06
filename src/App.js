import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import AddEmployee from './components/AddEmployee';
import EditEmployee from "./components/EditEmployee";
import Header from "./components/Header"
import Employees from './pages/Employees';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return(
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees/>}/>
        </Routes>
      </Header>
    </BrowserRouter>
  )
}

export default App;


// O segundo return só é necessário se você estiver criando uma função dentro de outra função que também precise retornar JSX.