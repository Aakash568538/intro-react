import PropTypes from 'prop-types';
import React from 'react';

class Greeting extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }

static getDerivedStateFromProps(props, state) {
    console.log("🚀 ~ file: ProptypesExample.jsx ~ line 13 ~ Greeting ~ getDerivedStateFromProps ~ getDerivedStateFromProps")
    return {name: props.name} 
  }

  componentDidMount() {
    console.log("componentDidMount")
      setTimeout(() => {
        this.setState({name: "componentDidMount Method"})
      }, 5000)
  }

  componentWillUnmount(){
    alert('This will unmount')   
  }

  render() {
    return (
      <h1>Hello, {this.state.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};

export default Greeting
