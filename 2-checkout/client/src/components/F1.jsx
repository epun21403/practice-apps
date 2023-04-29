import React, {useState} from 'react';

const F1 = ({setNext, setData, data}) => {

  const [f1, setF1] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setF1((inputs) => {
      return {...inputs, [name]: value}
    });
  }

  const update = () => {
    setNext('F2');
    setData((data) => ({
      ...data,
      ...f1
    }));
  }

  return (
    <form>
      <>Name</>
      <br></br>
      <input name='name' onChange={handleChange} placeholder='Name'/>
      <br></br>
      <>Email</>
      <br></br>
      <input name='email' placeholder='Email' onChange={handleChange}/>
      <br></br>
      <>Password</>
      <br></br>
      <input name='password' placeholder='Password' onChange={handleChange}/>
      <br></br>
      <button type='submit' onClick={update}>Next</button>
    </form>
  )
}

export default F1;