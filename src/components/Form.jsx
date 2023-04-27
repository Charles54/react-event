import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [city, setCity] = useState("");
    const [stateName, setStateName] = useState("");
    const [zip, setZip] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        const details = [firstName, lastName, userName, city, stateName, zip];
        console.log(details)
    };
    
  
    
return (

    <>

<form className="row mt-5 mb-5 g-3 needs-validation p-5 w-75 m-auto border shadow rounded" novalidate onSubmit={handleSubmit}>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" value={firstName} onChange={(e)=> {setFirstName(e.target.value)}} required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" value={lastName} onChange={(e)=> {setLastName(e.target.value)}} required/>
    <div className="valid-feedback">
      Looks good!
    </div>
</div>
  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label"  >Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={userName} onChange={(e)=>{setUserName(e.target.value)}} required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" value={city} onChange={(e)=>{setCity(e.target.value)}} required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" value={stateName} onChange={(e)=>{setStateName(e.target.value)}} required>
      <option selected>...</option>
      <option>Lagos</option>
      <option>PortHarcourt</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" value={zip} onChange={(e)=>{setZip(e.target.value)}} required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary w-100" type="submit" >Submit form</button>
  </div>
</form>



    </>
  )
}

export default Form