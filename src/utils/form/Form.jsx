import React from 'react'
import './Form.scss'

export default (props) => {
  return (
      <form className="column form-pd" onSubmit={props.searchString} >
        <label>Digite o material que deseja: </label>
        <div className="row">
            <input className="column-67"
                    type="text"
                    onChange={props.changeString}
                    name="buscar" 
                    placeholder="Digite o material que deseja." />
            <input className="button column-25" type="submit" value="Buscar!"  />
        </div>
    </form> 
  )
}
