import { useState } from 'react';
import './input.css';

let nextId = localStorage.list.length;

export default function Input({ list, setList }) {
  const [value, setValue] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function submit(evt) {
    evt.preventDefault();
    setList([
      ...list,
      {
        id: nextId++,
        text: value,
        important: isImportant,
        completed: false,
        active: true,
      },
    ]);
    setValue('');
    setIsImportant(false);
    setIsFocused(false);
  }

  function focus() {
    setValue('');
    setIsFocused(true);
  }

  function important(evt) {
    evt.preventDefault();
    setIsImportant(true);
  }

  return (
    <form className="form">
      <input
        type="text"
        name="todo-input"
        required={true}
        minLength={2}
        maxLength={30}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ваша задача"
        onFocus={() => focus()}
        className={'input'}
      />
      <button onClick={(evt) => important(evt)} className="form__button">
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
            fill={isImportant ? '#FF0000' : '#35383E'}
            fillOpacity={isImportant ? '0.9' : '0.25'}
          />
          <path d="M16 8.5H19V21.5H16V8.5Z" fill="white" />
          <path d="M16 23.5H19V26.5H16V23.5Z" fill="white" />
        </svg>
      </button>
      <button
        type="submit"
        onClick={(evt) => submit(evt)}
        className={`form__button ${!(isFocused && value.length >= 2) && 'form__button_disabled'}`}
        disabled={value.length < 2}
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
            fill={isFocused && value.length >= 2 ? '#00CD2D' : '#35383E'}
            fillOpacity={isFocused && value.length >= 2 ? '0.8' : '0.25'}
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
    </form>
  );
}
