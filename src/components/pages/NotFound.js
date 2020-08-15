import React from "react";

export default () => {
  return (
    <div style={{ height: "100vh" }}>
      <h1 className="display-4">
        <span className="text-danger">404</span>
        <span className="text-white"> Page Not Found</span>
      </h1>
      <p className="lead text-white">
        Sorry, the page you requested is not available.
      </p>
    </div>
  );
};
