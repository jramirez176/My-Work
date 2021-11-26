import React from "react";

class Jumbo extends React.Component  {

render() {
  return (
<main role="main">
<div className="container">
  <div className="p-5 mb-4 bg-light rounded-3">
    <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">Hello, world!</h1>
      <p className="col-md-8 fs-4">
        This is Jeff Ochoa's sample website made using React Componetize.
      </p>
      <p>
        <button className="btn btn-primary btn-lg">
          Learn more &raquo;
        </button>
      </p>
    </div>
  </div>
</div>
</main>
)
}
}


export default Jumbo;

    