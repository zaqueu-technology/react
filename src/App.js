import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'


function App() {
  const [role, setRole] = useState();
  const [employees, setEmployees] = useState(
    [
      {
        name: "Caleb",
        role: "Dev",
        img: "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        name: "Toto",
        role: "Designer",
        img: "https://images.pexels.com/photos/1562983/pexels-photo-1562983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        name: "Ralph",
        role: "CEO",
        img: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        name: "Lince",
        role: "Intern",
        img: "https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        name: "Sake",
        role: "Marketing",
        img: "https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        name: "Foggy",
        role: "Finances",
        img: "https://images.pexels.com/photos/1684504/pexels-photo-1684504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  )
  const showEmployee = true;
  return (
    <div className="App bg-red-300">
      {showEmployee ? 
        
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            console.log(uuidv4());
            return (
              <Employee 
                key = {uuidv4()}
                name = {employee.name}
                role = {employee.role}
                img = {employee.img} 
              />
            )
          })}
        </div>
        
        :
        <p>You don't have permission!</p>
      }
    </div>
  );
}

export default App;


// O segundo return só é necessário se você estiver criando uma função dentro de outra função que também precise retornar JSX.