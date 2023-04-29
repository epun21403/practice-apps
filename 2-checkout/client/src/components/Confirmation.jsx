import React from 'react';
import axios from 'axios'

const Confirmation = ({setNext, data}) => {

  const sendData = () => {
    axios.post('http://localhost:3000/checkout', data)
      .then(() => {
        console.log('Posted customer data');
        setNext('');
      })
      .catch((err) => {
        console.log('Error posting customer data');
      })
  }

  return (
    <div>
      <>{`Name: ${data.name}`}</>
      <br></br>
      <>{`Email: ${data.email}`}</>
      <br></br>
      <>{`Password: ${data.password}`}</>
      <br></br>
      <>{`Line1: ${data.line1}`}</>
      <br></br>
      <>{`Line2: ${data.line2}`}</>
      <br></br>
      <>{`City: ${data.city}`}</>
      <br></br>
      <>{`State: ${data.state}`}</>
      <br></br>
      <>{`Zip Code: ${data.zipcode}`}</>
      <br></br>
      <>{`CreditCard#: ${data.creditcard}`}</>
      <br></br>
      <>{`ExpireDate: ${data.expire}`}</>
      <br></br>
      <>{`CVV: ${data.cvv}`}</>
      <br></br>
      <>{`Billing Zip Code: ${data.billzipcode}`}</>
      <br></br>
      <button onClick={sendData}>Purchase</button>
    </div>
  )
}

export default Confirmation;