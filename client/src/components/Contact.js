import React, { useState } from "react";
import {
  validateEmail,
  checkInputLength,
  validateFieldsLength,
  toLower
} from "../utils/helpers";
import Header from "./NavTabs";
import $ from "jquery";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Footer from "./footer";

function Contact() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [messagelengtherror, setlengthMessage] = useState("");
  const [displayBlock, setdisplayBlock] = useState("d-none");
  const [displayEmailMessage, setDisplayEmailMessage] = useState("d-none");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    //const postUrl = `http://${window.location.hostname}:3001/api`;
    const postUrl = "/api"
    if (
      validateFieldsLength([userName, email, message]) &&
      validateEmail(email)
    ) {
      const response = await
      axios.post(postUrl, {name: userName, email:email, message: message})
      // await fetch(postUrl, 
      //   {
      //   method: "POST", 
      //   headers: {'Content-Type' : 'application/json',
      //             'Accept': 'application/json'}, 
      //   body: JSON.stringify({name:userName, email: email, message: message})
      // })
      if(response.status === 200){
        alert("The message was sent successfully.")
        setShow(true);
      } else {
        setShow(false);
        alert("The message was not sent successfully.")
      }

    } else {
      setErrorMessage("You must provide a message, email, and name.");
    }

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid!");
      return;
    }

    if (checkInputLength(message) === false) {
      setdisplayBlock("d-block alert alert-warning custom-message");
      setlengthMessage("message cannot be empty.");
      return;
    }
    alert("Form Submitted successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    let messageLength = inputValue.length;

    if (inputType === "message") {
      setMessage(inputValue);

      if (messageLength > 0) {
        setlengthMessage("This is a valid message.");
        setdisplayBlock("d-block alert alert-success custom-message");
        return;
      } else if (messageLength <= 0) {
        setlengthMessage("Message must be greater than 0 characters.");
        setdisplayBlock("d-block alert alert-warning custom-message");
        return;
      }
    }
    if (inputType === "email") {
      var inputValueToLower = inputValue.toLowerCase()
      setEmail(inputValueToLower);

      if (validateEmail(email)) {
        setErrorMessage("This is a valid email.");
        setDisplayEmailMessage("d-block alert alert-success custom-message");
        return;
      }
      if (validateEmail(email) == false) {
        setErrorMessage("this is not a valid email address.");
        setDisplayEmailMessage("d-block alert alert-warning custom-message");
        return;
      }
      return;
    }
  };

  return (
    <div>
      <Header />
      <Helmet>
        <style>{"body { background-color: #081A28; }"}</style>
      </Helmet>
      <div>
        <form className="p-5" action="http://localhost:3001/api" method="POST">
          <div className="form-group">
            <label for="form2">Name:</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={userName}
              type="input"
              name="name"
              className="form-control"
              id="form2"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label for="form1">Email address:</label>
            <input
              onChange={(e) => handleInputChange(e)}
              value={email}
              type="email"
              name="email"
              className="form-control"
              id="form1"
              placeholder="name@example.com"
            />
            <p className={displayEmailMessage}> {errorMessage}</p>
            <div className="form-group">
              <label for="form3">Message:</label>
              <textarea
                onChange={(e) => handleInputChange(e)}
                value={message}
                name="message"
                className="form-control"
                id="form3"
                rows="3"
              ></textarea>
              <div>
                <p className={displayBlock}> {messagelengtherror}</p>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary m-3"
            type="button"
            variant="primary"
            onClick={(e) => handleFormSubmit(e)}
          >
            {" "}
            submit
          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Thank you for your inquiry!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{errorMessage}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
