import {useEffect, useState} from 'react'
import Input from "./Input.jsx";

function App() {
  const [list, setList] = useState([]);
  function removeItem (id) {
    setList(prevlist => prevlist.filter(el => el.id !== id))
  }
  return (
    <>
      <Input list={list} setList={setList} />
      <ul>
      {list.map((item) => (
          <li key={item.id}>{item.text}
            <button onClick={() => removeItem(item.id)}>Удалить</button>
          </li>
      ))}
      </ul>
    </>
  )
}

export default App
