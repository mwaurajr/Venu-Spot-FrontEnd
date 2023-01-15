import React from "react";
import NotFound from "../images/error-404-monochrome.svg";
import ReactImageAppear from "react-image-appear";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div id="layoutError">
      <div id="layoutError_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="text-center mt-4">
                  <ReactImageAppear
                    placeholderStyle={{ background: "transparent" }}
                    src={NotFound}
                    className="img-404err"
                  />
                  <p className="lead">
                    This requested URL was not found on this server.
                  </p>
                  <Link to="/">
                    <i className="fas fa-arrow-left mr-1"></i>
                    Return to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageNotFound;
