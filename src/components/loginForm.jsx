import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  //Declare the states
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //On submit
  const onSubmit = (event) => {
    event.preventDefault();
    //Here place your can place your validation and authentication
    console.log("Email:", email);
    console.log("Password", password);
  };

  //Render the component
  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5 bg-dark">
                  <div className="card-header">
                    <h3 className="text-center text-light font-weight-light my-4">
                      Login
                    </h3>
                  </div>
                  <div className="card-body">
                    <form>
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
                          placeholder="Enter email address"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          className=" text-light small mb-1"
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
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="rememberPasswordCheck"
                            type="checkbox"
                          />
                          <label
                            className="text-light custom-control-label"
                            htmlFor="rememberPasswordCheck"
                          >
                            Remember password
                          </label>
                        </div>
                      </div>
                      <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                        <Link className="small" to="/forgot-password">
                          Forgot Password?
                        </Link>
                        <button
                          className="btn btn-info"
                          onClick={(event) => onSubmit(event)}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center">
                    <div className="small">
                      <Link to="/register">Need an account? Sign up!</Link>
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

export default LoginForm;
