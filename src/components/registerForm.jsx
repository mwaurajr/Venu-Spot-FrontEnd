import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  //Define the states
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  //On Submit
  const onSubmit = (event) => {
    event.preventDefault();
    //Here you can place your validation and register functionality on form sumbition
    console.log("First name: ", firstName);
    console.log("Last name: ", lastName);
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Confirm password", password2);
  };

  //Render the component
  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="card shadow-lg border-0 rounded-lg mt-5 bg-dark">
                  <div className="card-header">
                    <h3 className="text-center text-light font-weight-light my-4">
                      Create Account
                    </h3>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="text-light small mb-1"
                              htmlFor="inputFirstName"
                            >
                              First Name
                            </label>
                            <input
                              onChange={(event) =>
                                setFirstName(event.currentTarget.value)
                              }
                              className="form-control py-4"
                              id="inputFirstName"
                              type="text"
                              placeholder="Enter first name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="text-light small mb-1"
                              htmlFor="inputLastName"
                            >
                              Last Name
                            </label>
                            <input
                              onChange={(event) =>
                                setLastName(event.currentTarget.value)
                              }
                              className="form-control py-4"
                              id="inputLastName"
                              type="text"
                              placeholder="Enter last name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          className="text-light small mb-1"
                          htmlFor="inputEmailAddress"
                        >
                          Email
                        </label>
                        <input
                          onChange={(event) =>
                            setEmail(event.currentTarget.value)
                          }
                          className="form-control py-4"
                          id="inputEmailAddress"
                          type="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="text-light small mb-1"
                              htmlFor="inputPassword"
                            >
                              Password
                            </label>
                            <input
                              onChange={(event) =>
                                setPassword(event.currentTarget.value)
                              }
                              className="form-control py-4"
                              id="inputPassword"
                              type="password"
                              placeholder="Enter password"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="text-light small mb-1"
                              htmlFor="inputConfirmPassword"
                            >
                              Confirm Password
                            </label>
                            <input
                              onChange={(event) =>
                                setPassword2(event.currentTarget.value)
                              }
                              className="form-control py-4"
                              id="inputConfirmPassword"
                              type="password"
                              placeholder="Confirm password"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group mt-4 mb-0">
                        <button
                          onClick={(event) => onSubmit(event)}
                          className="btn btn-info btn-block"
                        >
                          Create Account
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center">
                    <div className="small">
                      <Link to="/login">Have an account? Go to login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RegisterForm;
