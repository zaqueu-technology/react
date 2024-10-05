import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(p) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="m-2 mx-auto block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={handleShow}>+ Add employee</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={(e)=>{
          e.preventDefault();
          p.newEmployee(name, role, img);
          setName('');
          setRole('');
          setImg('');
        }} 
        id='editmodal' className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" value={name}
              onChange={(e)=>{
                setName(e.target.value);
              }}
              placeholder='John Doe'
              />
            </div>
            
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="role">
                Role
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="role" type="text" value={role}
              onChange={(e)=>{
                setRole(e.target.value);
              }}
              placeholder='Website creator'
              />
            </div>
            
            
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="img">
                Image
              </label>
            </div>
            <div className="md:w-2/3">
              
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="img" type="text" value={img}
              onChange={(e)=>{
                setImg(e.target.value);
              }}
              placeholder='https://images.com'
              />
            </div>
            
            
          </div>
          
        </form>
        </Modal.Body>
        <Modal.Footer>
          
          <button onClick={handleClose} className='bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded'>Close</button>
          <button onClick={handleClose} form='editmodal' className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;