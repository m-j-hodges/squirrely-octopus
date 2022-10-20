import React, {useState} from 'react';
import { validateEmail } from '../utils/helpers';
import Header from "./NavTabs"

function Contact() {

  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

const handleFormSubmit = (e) => {
e.preventDefault();

if(!validateEmail(email)) {
  setErrorMessage('Email is invalid!')
  return;
} 
  alert('Form Submitted successfully!')
  setName('')
  setEmail('')
  setMessage('')
}

const handleInputChange = (e) => {
  const {target} = e;
  const inputType = target.name;
  const inputValue= target.value;

if(inputType === 'email') {
  setEmail(inputValue);
} else if (inputType === 'name') {
  setName(inputValue)}
else { setMessage(inputValue)}

}




  return(
    <div> 
      <Header /> 
    <div>
    <p> This website was built my Matthew Hodges using React</p>
    <h5> Contact Me: </h5>
    <form className="p-5">
    <div className="form-group">
    <label for="form2">Name:</label>
    <input onChange={handleInputChange} value={userName} type="input" name="name" className="form-control" id="form2" placeholder="Name"/>
  </div>
    <div className="form-group">
    <label for="form1">Email address:</label>
    <input onChange={handleInputChange} value={email} type="email" name="email" className="form-control" id="form1" placeholder="name@example.com"/>
    <div className="form-group">
    <label for="form3">Message:</label>
    <textarea onChange={handleInputChange} value={message} name="message" className="form-control" id="form3" rows="3"></textarea>
  </div>

    </div>
    <button type="submit" onClick={handleFormSubmit} class="btn btn-primary">Submit</button>
</form>
{errorMessage && (
  <div>
    <p className="error-text"> {errorMessage}</p>
  </div>
)}
</div>
</div>
  )

}

export default Contact;