import { useState, useEffect, Fragment } from 'react'
import {v4} from 'uuid'
import './App.css' 
function TodoList() {
  const [array, setArray] = useState([{ text: 'hello', id: v4() }, { text: 'World', id: v4() }])
  const [input, setInput] = useState('')
  useEffect(() => {
  }, [])
  function onChange(e) {
    setInput(e.target.value)
  }
  function onAdd() {
    setArray([...array, { text: input, id: v4() }])
  }
  function onDeleteInput(e) {
    setArray(array.filter(arr => arr.id !== e.target.id))
  }
  function onFocusInpuit() {
    setInput('')
  }
  return (
    <>
      <div className="wrap">
      <ul className="ul">
          {
            array.map(({text, id}) => {
              return (
                <Fragment key={id}>
                  <div className="notation">
                    <li id={id} onClick={onDeleteInput}>&#10008; {text}</li>
                    <input type="date" className='date' />
                  </div>
                </Fragment>
              )
            })
          }
      </ul>
      <div className="input">
        <label htmlFor="input" >Add to the list</label>
          <input
            id="input"
            type='text'
            value={input}
            onChange={onChange}
            onFocus={onFocusInpuit}
          />
          <button onClick={onAdd} className='btn'>Push</button>
      </div>
      </div>
    </>
  )
}
export default TodoList