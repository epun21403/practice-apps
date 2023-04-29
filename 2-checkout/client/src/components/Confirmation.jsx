import React from 'react';

const Confirmation = ({setNext, data}) => {
  return (
    <form>
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
      <>{`Billing Zip Code: ${data.bill}`}</>
      <br></br>
      <button onClick={() => {setNext('')}}>Purchase</button>
    </form>
  )
}

export default Confirmation;