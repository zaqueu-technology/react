import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState();
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? 
        <>
        <input type='text' onChange={(e)=>{
          setRole(e.target.value);
        }}/>
          <Employee name="Caleb" role="CEO"/>
          <Employee name="John" role="Intern"/>
          <Employee name="Carl" role={role}/>
        </>
        :
        <p>You don't have permission!</p>
      }
    </div>
  );
}

export default App;
