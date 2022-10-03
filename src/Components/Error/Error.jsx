import React from "react";

const Error = () => {
  return (
    <div>
      <div className="container">
        <div className="error d-flex align-items-center justify-content-between">
          <p className="error-text">Incorrect username or password.</p>
          <i class="fas fa-times gtext-danger"></i>
        </div>
      </div>
    </div>
  );
};

export default Error;
