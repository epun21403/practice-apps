import React, {useState} from 'react';

const F3 = ({setNext, setData, data}) => {

  const [f3, setF3] = useState({
    creditcard: '',
    expire: '',
    cvv: '',
    bill: ''
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setF3((inputs) => {
      return {...inputs, [name]: value};
    })
  }

  const update = () => {
    setNext('finish');
    setData((data) => ({
      ...data,
      ...f3
    }))
  }

  return (
    <form>
      <>Creditcard#</>
      <br></br>
      <input name='creditcard' onChange={handleChange} placeholder='Creditcard#'/>
      <br></br>
      <>Expire date</>
      <br></br>
      <input name='expire' onChange={handleChange} placeholder='Expire date'/>
      <br></br>
      <>CVV</>
      <br></br>
      <input name='cvv' onChange={handleChange} placeholder='CVV'/>
      <br></br>
      <>Billing Zip Code</>
      <br></br>
      <input name='bill' onChange={handleChange} placeholder='Billing ZIP Code'/>
      <br></br>
      <button type='submit'onClick={update}>Finish checkout</button>
    </form>
  )
}

export default F3;