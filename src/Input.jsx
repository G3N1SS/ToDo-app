import {useState} from "react";

let nextId = 0;

export default function Input({list, setList}) {
  const [value, setValue] = useState("");
  function submit(evt){
    evt.preventDefault()
    setList([
        ...list,
      {
        id: nextId++,
        text: value,
      }
    ])
    setValue('')
  }
  return (
      <form>
        <label htmlFor="todo-input">Your ToDo task</label>
        <input
          type="text"
          name="todo-input"
          required={true}
          minLength={2}
          maxLength={30}
          value={value}
          onChange={(e)=>setValue(e.target.value)}
        />
        <button type="submit" onClick={evt=>submit(evt)}>Submit</button>
      </form>
  )
}