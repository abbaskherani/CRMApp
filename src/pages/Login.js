import { useState } from "react";
import React from "react";
import {Dropdown, DropdownButton} from 'react-bootstrap';
function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [userType, setUserType] = useState("Customer");

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const handleSelect = (e) => {
      setUserType(e)
  }
  return (
    <div className="bg-primary d-flex justify-content-center align-items-center vh-100">
      <div className="card m-5 p-5">
        <div className="row">
          <div className="col">
            {!showSignup ? (
              <div className="login">
                <form>
                  <div className="input-group m-1">
                    <input type="text" className="form-control" placeholder="userID" />
                  </div>

                  <div className="input-group m-1">
                    <input type="password" className="form-control" placeholder="password"/>
                  </div>

                  <div className="input-group m-1">
                    <input type="text" className="form-control btn btn-primary" value="Log In" />
                  </div>
                  <div className="text-info text-center" onClick={toggleSignup}>Don't have an Account? Sign Up</div>
                </form>
              </div>
            ) : (
              <div className="signup">
              <form>
              {/* user id, username, email, password, usertype, signup button , toggle text
               */}
                  <div className="input-group m-1">
                    <input type="text" className="form-control" placeholder="User ID" />
                  </div>
                  <div className="input-group m-1">
                    <input type="text" className="form-control" placeholder="UserName" />
                  </div>
                    <input type="email" className="form-control m-1" placeholder="Email" />
                  <div className="input-group m-1">
                    <input type="password" className="form-control" placeholder="password"/>
                  </div>
                  <div className="input-group m-1">
                    <span className="text-muted">User Type</span>
                    <DropdownButton
                    align="end"
                    title={userType}
                    onSelect={handleSelect}
                    variant="light"
                    className="mx-1" >
                    {/* eventkey is used to send value to the backend or the database */}
                     
                    <Dropdown.Item eventKey="CUSTOMER">Customer</Dropdown.Item>
                    <Dropdown.Item eventKey="Engineer">Engineer</Dropdown.Item>
                    
                    </DropdownButton>
                  </div>
                  <div className="input-group m-1">
                    <input type="text" className="form-control btn btn-primary" value="Sign Up" />
                  </div>
                  <div className="text-info text-center" onClick={toggleSignup}>Already have an Account? Login</div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
