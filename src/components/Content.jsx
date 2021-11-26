import React from "react";


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  onItemClicked = (e) => {
    e.preventDefault();
    console.log("ive been clicked");
  };

  componentDidMount() {
  
    console.log("componentDidMount");
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Click Handler Function</h2>
            <p>Click this button to start a console log!</p>
            <p>
              <button
                className="btn btn-secondary"
                onClick={this.onItemClicked}
              >
                Click this Link &raquo;
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
