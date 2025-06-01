import {useEffect, useState} from 'react'
import Input from "./Input.jsx";
import TaskItem from "./TaskItem.jsx";
import TaskList from "./TaskList.jsx";

function App() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')));
  function removeItem (id) {
    setList(prevlist => prevlist.filter(el => el.id !== id))
  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  },[list]);

  return (
    <>
      <Input list={list} setList={setList} />
      <TaskList list={list} removeItem={removeItem} />
    </>
  )
}

export default App
