import React from 'react'
import './Form.scss'

export default (props) => {
  return (
      <form className="column form-pd" onSubmit={props.search} >
        <label htmlFor="buscar">Digite o material que deseja: </label>
        <div className="row">
            <input className="column-67"
                    type="text"
                    onChange={props.changeString}
                    value={props.value}
                    name="buscar" 
                    placeholder="Digite o material que deseja." />
            <button className="button column-25" typeof="submit" >Buscar!</button>
        </div>
    </form> 
  )
}
