import React from "react";

const Form = (props) => {
  // const { values, update, submit } = props

  const onChange = evt => {
    //fill in
    const { name, value } = evt.target;
    props.change(name,value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    props.submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div>
        <label>Name:
        <input 
        type='text'
        name='name'
        value={props.values.name}
        onChange={onChange}
        />

        </label>
        <label>Email:
        <input 
        type='email'
        name='email'
        value={props.values.email}
        onChange={onChange}
        />
        </label>

        <label>
          <select value={props.values.role} name='role' onChange={onChange}>
            <option value=''> --Select Role--</option>
            <option value='Frontend Engineer'>Frontend Engineer</option>
            <option value='Backend Engineer'>Backend Engineer</option>
            <option value='Designer'>Designer</option>
          </select>
        </label>
        <div className='submit'>
          <button>SUBMIT</button>
        </div>
      </div>
    </form>
  )

}

export default Form;