import TaskItem from "../TaskItem/TaskItem.jsx";
import './tasklist.css'

export default function TaskList({list, removeItem}) {
  return (
        <ul className={'task-list'}>
          {list.map((item) => (
              <TaskItem key={item.id} item={item} removeItem={removeItem} />
          ))}
        </ul>
  )
}