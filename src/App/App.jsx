import { useEffect, useState } from 'react';
import Input from '../Input/Input.jsx';
import TaskList from '../TaskList/TaskList.jsx';
import './app.css';

function App() {
  const [list, setList] = useState([]);

  function removeItem(id) {
    setList((prevlist) => prevlist.filter((el) => el.id !== id));
  }

  async function loadTasksFromServer() {
    // TODO: fetch tasks from server
  }

  async function saveTasksToServer(updatedList) {
    // TODO: send data to server
  }

  return (
    <main className="page">
      <Input list={list} setList={setList} />
      <TaskList list={list} removeItem={removeItem} setList={setList} />
    </main>
  );
}

export default App;
