import { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem.jsx';
import './tasklist.css';

export default function TaskList({ list, removeItem, setList }) {
  const [filter, setFilter] = useState('all');

  function toggleCompleted(id) {
    setList((list) =>
      list.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
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
          className={`filter__btn ${filter === 'completed' && 'filter__btn_active'}`}
          onClick={() => setFilter('important')}
        >
          Важные
        </button>
      </div>
      <ul className={'task-list'}>
        {list.map((item) =>
          filter === 'all' ? (
            <TaskItem
              key={item.id}
              item={item}
              removeItem={removeItem}
              onToggleCompleted={toggleCompleted}
            />
          ) : filter === 'completed' ? (
            item.completed && (
              <TaskItem
                key={item.id}
                item={item}
                removeItem={removeItem}
                onToggleCompleted={toggleCompleted}
              />
            )
          ) : filter === 'important' ? (
            item.important && (
              <TaskItem
                key={item.id}
                item={item}
                removeItem={removeItem}
                onToggleCompleted={toggleCompleted}
              />
            )
          ) : filter === 'active' ? (
            item.active && (
              <TaskItem
                key={item.id}
                item={item}
                removeItem={removeItem}
                onToggleCompleted={toggleCompleted}
              />
            )
          ) : (
            ''
          )
        )}
      </ul>
    </>
  );
}
