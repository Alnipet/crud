import React, { useRef } from 'react';
import styles from './Input.module.css';
import { AddIcon } from '../Icons/AddIcon';

export const Input = ({ handleAdd }) => {
  const inputRef = useRef();

  const handleInput = () => {
    handleAdd({ content: inputRef.current.value });
    inputRef.current.value = '';
  };

  return (
    <div className={styles.wrapper}>
      <textarea className={styles.textarea} ref={inputRef}></textarea>
      <button className={styles.btn} onClick={() => handleInput()}>
        <AddIcon />
      </button>
    </div>
  );
};
