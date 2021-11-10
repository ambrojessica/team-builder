import logo from './logo.svg';
import './App.css';
//import stuff
import React, { useState } from 'react';
import Form from './Form';
// import axios from 'axios';


function App() {
  const [form, setForm] = useState([]);
  const[formValues, setFormValues] = useState({
    name: '',
    email: '',
    role: '',
  });

  const updateForm = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  }
  
  const submitForm = () => {
    setForm([formValues, ...form]);
    setFormValues({name:'', email:'', role:''});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Join Our NEW React Class</h1>
        <Form
        values={formValues}
        change={updateForm}
        submit={submitForm} />
        {form.map((user, ind)=> {
          return (
          <div key={ind}>
            {user.name}, {user.email}, {user.role}
          </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
