import React from 'react'

export const InputText = (props) => {
    return (
        <label>
        <input
          className="form-control input-sm"
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handleChange}
        />
      </label>
)
}

export default InputText
