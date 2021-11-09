import logo from './logo.svg';
import './App.css';
//import stuff
import React, { useState } from 'react';
import Form from './Form';
// import axios from 'axios';


const intialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {
  const [form, setForm] = useState([])
  const[formValues, setFormValues] = useState(intialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }
  
  const submitForm = () => {
    const newFriend = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form
        values={formValues}
        update={updateForm}
        submit={submitForm} />
      </header>
    </div>
  );
}

export default App;
