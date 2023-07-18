import { useState, useEffect } from 'react'

import './App.css' 
function TodoList() {
  const [array, setArray] = useState([{ text: 'hello' }, { text: 'World' }])
  const [input, setInput] = useState('')
  useEffect(() => {

  }, [])
  function onChange(e) {
    setInput(e.target.value)
  }
  function onAdd() {
    setArray([...array, {text: input}])
  }
  return (
    <>
      <div className="wrap">
      <ul className="ul">
        {
          array.map(({text}, index) => {
            return (
              <>
                <li key={index}><span>&#10008;</span>{text}</li>
              </>
            )
        })
      }
      </ul>
      <div className="input">
        <label htmlFor="input" >Add to the list</label>
          <input id="input" type='text' value={input} onChange={onChange} />
          <button onClick={onAdd} className='btn'>Push</button>
      </div>
      </div>
    </>
  )
}
export default TodoList