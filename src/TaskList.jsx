import TaskItem from "./TaskItem.jsx";

export default function TaskList({list, removeItem}) {
  return (
        <ul>
          {list.map((item) => (
              <TaskItem key={item.id} item={item} removeItem={removeItem} />
          ))}
        </ul>
  )
}