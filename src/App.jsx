import React from "react";
import List from "./List";
// import List from "./ListFuncWithHooks"
import Table from "./Table";
import Greeting from "./ProptypesExample";
/*Add import statement here*/

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: "",
      assignments: [] /*Below this line, add the students state variable*/,
      grades: {},
      show: true
    };

    this.handleButtonClicked = this.handleButtonClicked.bind(this);
    this.addAssignment = this.addAssignment.bind(this);
    /*Uncomment the line below to bind the method*/
    /*this.addStudent = this.addStudent.bind(this);*/
    this.addGrade = this.addGrade.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  handleButtonClicked(buttonName) {
    this.setState({
      buttonClicked: buttonName
    });
  }

  /*Check out this addAssignment method*/
  addAssignment(assignmentName) {
    this.setState({
      assignments: this.state.assignments.concat(assignmentName)
    });
  }

  /*Write an addStudent method here*/

  addGrade(assignment, student, score) {
    let grades = this.state.grades;
    let assignmentName = assignment;
    let studentName = student;
    if (!(assignment in grades)) {
      grades[assignmentName] = {};
    }
    grades[assignmentName][studentName] = score;
    this.setState({ grades: grades });
  }

  render() {
    console.log('render')
    let tabChoice = <div />;

    /*Uncomment below to render assignments*/
    if (this.state.buttonClicked === "assignments") {
      tabChoice = (
        <List
          placeholder="Add Assignment..."
          currList={this.state.assignments}
          addFunction={this.addAssignment}
          title="Assignments"
        />
      );
    }

    /* Change below to render students*/

    if (this.state.buttonClicked === "students") {
      tabChoice = (
        <List
          placeholder="Add Assignment..." 
          currList={this.state.assignments}
          addFunction={this.addAssignment}
          title="Student Roster"
        />
      );
    }

    /* Uncomment lines below to render grades*/
    if (this.state.buttonClicked === "grades") {
      tabChoice = (
        <Table
          tableNames={this.state.assignments}
          rows={this.state.students}
          addFunction={this.addGrade}
          data={this.state.grades}
        />
      );
    }

    return (
      <div>
        <div className="Box Box--spacious f4">
          {/* <div className="Box-header">
          {
            this.state.show && <Greeting name='NewStudents'/>
          }
          </div> */}
          {/* <button onClick={() => {this.setState({show: !this.state.show})}}>Click me to toggle</button>  */}
          <Greeting name='NewStudents'/>
          </div>
        <nav className="UnderlineNav d-flex flex-justify-center">
          <div className="UnderlineNav-body pt-6">
            <button
              className="btn btn-primary"
              onClick={() => this.handleButtonClicked("assignments")}
            >
              Assignments
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.handleButtonClicked("students")}
            >
              Students
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.handleButtonClicked("grades")}
            >
              Grades
            </button>
          </div>
        </nav>
        {tabChoice}
      </div>
    );
  }
}

export default App;
