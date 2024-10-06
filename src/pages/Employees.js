import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import AddEmployee from '../components/AddEmployee';
import EditEmployee from "../components/EditEmployee";
import Header from "../components/Header"


function Employees() {
  const [role, setRole] = useState();
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Caleb",
        role: "Dev",
        img: "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 2,
        name: "Toto",
        role: "Designer",
        img: "https://images.pexels.com/photos/1562983/pexels-photo-1562983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 3,
        name: "Ralph",
        role: "CEO",
        img: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 4,
        name: "Lince",
        role: "Intern",
        img: "https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 5,
        name: "Sake",
        role: "Marketing",
        img: "https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 6,
        name: "Foggy",
        role: "Finances",
        img: "https://images.pexels.com/photos/1684504/pexels-photo-1684504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  )
  const showEmployee = true;

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee)=>{
      if(employee.id === id){
        return {...employee, name: newName, role: newRole}
      }
      return employee;
    })
    setEmployees(updatedEmployees);

    return;
  }

  function newEmployee(name, role, img){
    newEmployee = {
      id: uuidv4(),
      name: name,
      role:role,
      img: img
    }
    setEmployees([...employees, newEmployee])
  }

  return (
    <div className="App bg-gray-700 min-h-screen">
      
      {showEmployee ? 
        <>
          <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            
            const editEmployee = <EditEmployee name={employee.name} role={employee.role} id={employee.id} updateEmployee = {updateEmployee}/>;

            return (
              <Employee 
                key = {uuidv4()}
                id = {employee.id}
                name = {employee.name}
                role = {employee.role}
                img = {employee.img} 
                editEmployee = {editEmployee}
              />
            )
          })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
        :
        <p>You don't have permission!</p>
      }
    </div>
  );
}

export default Employees;


// O segundo return só é necessário se você estiver criando uma função dentro de outra função que também precise retornar JSX.