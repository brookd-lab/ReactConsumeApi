import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      name: "",
      age: "", 
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      name: this.state.name,
      age: this.state.age
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          age: response.data.age,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
        alert("You do not have permission to add");;
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      name: "",
      age: "",
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                className="form-control"
                id="age"
                required
                value={this.state.age}
                onChange={this.onChangeAge}
                name="age"
              />
            </div>

<Link
                to={"/tutorials"}
                className=""
              >
                <button
                  type="submit"
                  className="badge badge-success"
                  onClick={this.saveTutorial}
                >
                Submit
                </button>
              </Link>
             <Link
                            to={"/"}
                            className="ml-2"
                          ><button className="badge badge-danger">
                            Cancel
                            </button>
                          </Link>
          </div>
        )}
      </div>
    );
  }
}
