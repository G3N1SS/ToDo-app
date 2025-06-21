import { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem.jsx';
import './tasklist.css';

export default function TaskList({ list, removeItem, setList }) {
  const [filter, setFilter] = useState('all');

  const filteredList = list.filter((item) => {
    if (filter === 'all') return true;
    else if (filter === 'active') return !item.completed;
    else if (filter === 'completed') return item.completed;
    else if (filter === 'important') return item.important;
  });

  function toggleCompleted(id) {
    const updatedTasks = list.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setList(updatedTasks);
  }
  return (
    <>
      <div className="filter">
        <button
          className={`filter__btn ${filter === 'all' && 'filter__btn_active'}`}
          onClick={() => setFilter('all')}
        >
          Все
        </button>
        <button
          className={`filter__btn ${filter === 'active' && 'filter__btn_active'}`}
          onClick={() => setFilter('active')}
        >
          Активные
        </button>
        <button
          className={`filter__btn ${filter === 'completed' && 'filter__btn_active'}`}
          onClick={() => setFilter('completed')}
        >
          Выполненные
        </button>
        <button
          className={`filter__btn ${filter === 'important' && 'filter__btn_active'}`}
          onClick={() => setFilter('important')}
        >
          Важные
        </button>
      </div>
      {filteredList.length >= 1 ? (
        <ul className="task-list">
          {filteredList.map((item) => (
            <TaskItem
              key={item.id}
              item={item}
              removeItem={removeItem}
              onToggleCompleted={toggleCompleted}
            />
          ))}
        </ul>
      ) : (
        <h2 className={'task-list__title'}>
          Здесь будут отображаться ваши задачи!
        </h2>
      )}
    </>
  );
}
