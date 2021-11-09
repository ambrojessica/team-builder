import React from "react";

const Form = (props) => {
  const { values, update, submit } = props

  const onChange = evt => {
    //fill in
    const name = evt.target.name;
    const { value } = evt.target.value;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div>
        <label>Name:
        <input 
        type='text'
        name='name'
        value={values.name}
        onChange={onChange}
        />

        </label>
        <label>Email:
        <input 
        type='email'
        name='email'
        value={values.email}
        onChange={onChange}
        />
        </label>

        <label>
          <select value={values.role} name='role' onChange={onChange}>
            <option value=''> --Select Role--</option>
            <option value='Frontend Engineer'>Frontend Engineer</option>
            <option value='Backend Engineer'>Backend Engineer</option>
            <option value='Designer'>Designer</option>
          </select>
        </label>
        <div className='submit'>
          <button disabled={!values.name || !values.email || !values.role }>SUBMIT</button>
        </div>
      </div>
    </form>
  )

}

export default Form;