import React, { useState } from 'react'

export const ListFunc = (props) => {
 const [value, setValue] = useState('aaa')
 
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
        <p className="h2">REPLACE THIS TITLE WITH A PROP</p>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="form-control input-sm"
              type="text"
              placeholder={props.placeholder}
              value={value}
              onChange={handleChange}
            />
          </label>
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