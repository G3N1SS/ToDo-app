import { useEffect, useState } from 'react';
import Input from '../Input/Input.jsx';
import TaskList from '../TaskList/TaskList.jsx';
import './app.css';

function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('list')) || []
  );
  function removeItem(id) {
    setList((prevlist) => prevlist.filter((el) => el.id !== id));
  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list, { list }]);

  return (
    <main className="page">
      <Input list={list} setList={setList} />
      <TaskList list={list} removeItem={removeItem} setList={setList} />
    </main>
  );
}

export default App;
