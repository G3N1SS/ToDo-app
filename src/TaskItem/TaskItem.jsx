import { useEffect, useState } from 'react';
import './taskitem.css';

export default function TaskItem({ item, removeItem }) {
  const [color, setColor] = useState('#35383E');
  const [completed, setCompleted] = useState(item.completed || false);
  const [completedHover, setCompletedHover] = useState(false);

  function toggleCompleted() {
    setCompleted(!completed);
  }
  return (
    <li
      className={`task-list__item ${!item.important && 'task-list__item_not-important'} ${item.completed && 'task-list__item_completed'}`}
    >
      <div className={`task-list__btns`}>
        <button className="task-list__btn">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="35"
              height="35"
              rx="11.25"
              fill={item.important ? '#FF0000' : '#35383E'}
              fillOpacity={item.important ? '1' : '0.25'}
            />
            <path d="M16 8.5H19V21.5H16V8.5Z" fill="white" />
            <path d="M16 23.5H19V26.5H16V23.5Z" fill="white" />
          </svg>
        </button>
        <button
          className="task-list__btn"
          onMouseEnter={() => setCompletedHover(true)}
          onMouseLeave={() => setCompletedHover(false)}
          onClick={() => toggleCompleted()}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="35"
              height="35"
              rx="11.25"
              fill={completedHover || item.completed ? '#00CD2D' : '#35383E'}
              fillOpacity={completedHover || item.completed ? '0.8' : '0.25'}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.25 19.75L24.25 10.75L26.5 13L17.5 22L15.25 19.75ZM13 22L15.25 19.75L10.75 15.25L8.5 17.5L13 22Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.25 19.75L24.25 10.75L26.5 13L17.5 22L15.25 19.75ZM13 22L15.25 19.75L10.75 15.25L8.5 17.5L13 22Z"
              fill="#00CD2D"
              fillOpacity="0.1"
            />
            <path
              d="M13 22L15.25 24.25L17.5 22L15.25 19.75L13 22Z"
              fill="white"
            />
            <path
              d="M13 22L15.25 24.25L17.5 22L15.25 19.75L13 22Z"
              fill="#00CD2D"
              fillOpacity="0.1"
            />
          </svg>
        </button>
      </div>
      <div className={'task-list__text'}>
        {item.text}
        {/*Кнопка удаления*/}
        <button
          onClick={() => removeItem(item.id)}
          onMouseEnter={() => setColor('#FF0000')}
          onMouseLeave={() => setColor('#35383E')}
          className={'task-list__btn'}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="35"
              height="35"
              rx="11.25"
              fill={color}
              fillOpacity={color === '#FF0000' ? '0.9' : '0.25'}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.4999 19.3183L22.9547 24.7731L24.773 22.9548L19.3182 17.5L24.773 12.0452L22.9547 10.2269L17.4999 15.6817L12.0451 10.2269L10.2268 12.0452L15.6816 17.5L10.2268 22.9548L12.0451 24.7731L17.4999 19.3183ZM17.4999 19.3183L19.3182 17.5L17.4999 15.6817L15.6816 17.5L17.4999 19.3183Z"
              fill={'#FFF'}
              fillOpacity={color === '#FF0000' ? '0.9' : '0.75'}
            />
            <path
              d="M17.4999 19.3183L19.3182 17.5L17.4999 15.6817L15.6816 17.5L17.4999 19.3183Z"
              fill={color === '#FF0000' ? '#fff' : '#FFF'}
              fillOpacity={color === '#FF0000' ? '0.9' : '0.75'}
            />
          </svg>
        </button>
      </div>
    </li>
  );
}
