import { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem.jsx';
import './tasklist.css';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

export default function TaskList({ list, removeItem, setList }) {
  const [filter, setFilter] = useState('all');

  const filteredList = list.filter((item) => {
    if (filter === 'all') return true;
    else if (filter === 'active') return !item.completed;
    else if (filter === 'completed') return item.completed;
    else if (filter === 'important') return item.important;
  });

  function handleDragEnd(result) {
    if (!result.destination) return;
    const newList = Array.from(list);
    const [movedItem] = newList.splice(result.source.index, 1);
    newList.splice(result.destination.index, 0, movedItem);
    setList(newList);
  }

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
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <ul
                className="task-list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {filteredList.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TaskItem
                          item={item}
                          removeItem={removeItem}
                          onToggleCompleted={toggleCompleted}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <h2 className={'task-list__title'}>
          Здесь будут отображаться ваши задачи!
        </h2>
      )}
    </>
  );
}
