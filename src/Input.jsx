import {useState} from "react";

let nextId = localStorage.list.length;

export default function Input({list, setList}) {
  const [value, setValue] = useState("Your To-Do task");
  const [isImportant, setIsImportant] = useState(false);
  console.log(isImportant);
  function submit(evt){
    evt.preventDefault()
    setList([
        ...list,
      {
        id: nextId++,
        text: value,
        important: isImportant,
      }
    ])
    setValue('Your To-Do task');
    setIsImportant(false)
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
          placeholder="fdsfds"
          onFocus={() => setValue('')}
        />
        <input type="checkbox" value={isImportant} onChange={()=>setIsImportant(true)} checked={isImportant}></input>
        <button type="submit" onClick={evt=>submit(evt)}>Submit</button>
      </form>
  )
}