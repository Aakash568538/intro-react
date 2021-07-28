import React from "react";

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.input.current.value);
      // alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    handleChange = (event) => {
    this.setState({value: event.target.value})
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" onChange={this.handleChange} ref={this.input} />
            {/* <input type="text" onChange={this.handleChange} value={this.state.formData.firstNmae} id='fname'/>            
            <input type="text" onChange={this.handleChange} value={this.state.formData.lastName} id='lname'/> */}
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm