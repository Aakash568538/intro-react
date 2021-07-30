import React from 'react'
import InputText from './InputText';

export const ListFunc = (props) => {
 const [value, setValue] = React.useState('aaa')
 
 const handleChange = (event) => {
    setValue(event.target.value);
    }

 const handleSubmit = (event) => {
    setValue("")
    props.addFunction(value);
    event.preventDefault();
  }

    return (
        <div className="col-6 mx-auto">
        {/*Replace the code below to call the title prop*/}
        <p className="h2" id='title'>REPLACE THIS TITLE WITH A PROP</p>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              id='assignment-input'
              className="form-control input-sm"
              type="text"
              placeholder={props.placeholder}
              value={value}
              onChange={handleChange}
            />
          </label>
          <InputText
            placeholder={props.placeholder}
            value={value}
            handleChange={handleChange}
          />
          <input className="btn btn-sm" type="submit" value="Submit" />
        </form>
        <ul className="Box">
          <div className="Box-header">{props.title}</div>
          {props.currList.map((item, index) => (
            <li className="Box-row" key={index}>
              {" "}
              {item}{" "}
            </li>
          ))}
        </ul>
      </div>
    )
}

export default ListFunc