import PropTypes from 'prop-types';
import React from 'react';
import './assets/table.css'
class DidMountApiCall extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  shouldComponentUpdate() {
    return true; //Change to true for state to update
  }
  
  componentDidMount() {
    console.log("componentDidMount")
    fetch('https://run.mocky.io/v3/5cdd5bd1-90dc-43f9-875f-c7bd1f5dee7d').then(
        (response) => response.json()
    ).then(data => this.setState({users: data}))  }

  render() {
    return (
        <div >
        <p>This will display all of the users from Api call</p>
        <table style={{width: '50%'}}>
        <thead style={{textAlign: 'left'}}>
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {this.state.users.map(user=>
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
            </tr>)}
            </tbody>
        </table>
       </div>    );
  }
}

DidMountApiCall.propTypes = {
  users: PropTypes.array
};

export default DidMountApiCall
