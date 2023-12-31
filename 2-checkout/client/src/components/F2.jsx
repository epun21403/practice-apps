import React, {useState} from 'react';

const F2 = ({setNext, setData, data}) => {

  const [f2, setF2] = useState({
    line1: null,
    line2: null,
    city: null,
    state: null,
    zipcode: null,
    phone: null
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setF2((inputs) => {
      return {...inputs, [name]: value};
    })
  }

  const update = () => {
    setNext('F3')
    setData((data) => ({
      ...data,
      ...f2
    }))
  }

  return (
    <form>
      <>Line 1</>
      <br></br>
      <input name='line1' onChange={handleChange} placeholder='Line 1'/>
      <br></br>
      <>Line 2</>
      <br></br>
      <input name='line2' onChange={handleChange} placeholder='Line 2'/>
      <br></br>
      <>City</>
      <br></br>
      <input name='city' onChange={handleChange} placeholder='City'/>
      <br></br>
      <>State</>
      <br></br>
      <input name='state' onChange={handleChange} placeholder='State'/>
      <br></br>
      <>Zip Code</>
      <br></br>
      <input name='zipcode' type='number' onChange={handleChange} placeholder='ZIP Code'/>
      <br></br>
      <>Phone number</>
      <br></br>
      <input name='phone' type='number' onChange={handleChange} placeholder='Phone number'/>
      <br></br>
      <button type='submit' onClick={update}>Next</button>
    </form>
  )
}

export default F2;