import {useState} from "react";
import './taskitem.css'

export default function TaskItem({item, removeItem}) {
  const [color, setColor] = useState('#35383E')
  return (
      <li className={`task-list__item ${!item.important && 'task-list__item_not-important'}`}>
        {item.important ?
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="35" height="35" rx="11.25" fill={'#FF0000'} fill-opacity='0.9' />
          <path d="M16 8.5H19V21.5H16V8.5Z" fill="white" />
          <path d="M16 23.5H19V26.5H16V23.5Z" fill="white" />
        </svg> : ""}
        <div className={'task-list__text'}>
        {item.text}
        <button onClick={() => removeItem(item.id)} onMouseEnter={()=>setColor('#FF0000')} onMouseLeave={()=>setColor('#35383E')} className={'task-list__btn'}>
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="35" height="35" rx="11.25" fill={color} fill-opacity={color === '#FF0000' ? '0.9' : '0.1'} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4999 19.3183L22.9547 24.7731L24.773 22.9548L19.3182 17.5L24.773 12.0452L22.9547 10.2269L17.4999 15.6817L12.0451 10.2269L10.2268 12.0452L15.6816 17.5L10.2268 22.9548L12.0451 24.7731L17.4999 19.3183ZM17.4999 19.3183L19.3182 17.5L17.4999 15.6817L15.6816 17.5L17.4999 19.3183Z" fill={color === '#FF0000' ? '#FFF' : '#35383E'} fill-opacity={color === '#FF0000' ? '1' : '0.25'}  />
            <path d="M17.4999 19.3183L19.3182 17.5L17.4999 15.6817L15.6816 17.5L17.4999 19.3183Z" fill={color === '#FF0000' ? '#FFF' : '#35383E'}  fill-opacity={color === '#FF0000' ? '1' : '0.25'} />
          </svg>
        </button>
        </div>
      </li>
  )
}