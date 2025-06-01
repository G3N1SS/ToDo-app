export default function TaskItem({item, removeItem}) {
  return (
      <li>
        {item.text}
        {item.important ? ' важно' : ""}
        <button onClick={() => removeItem(item.id)}>Удалить</button>
      </li>
  )
}