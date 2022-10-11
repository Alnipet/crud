import React from 'react';
import styles from './Note.module.css';

import { Remove } from '../Icons/Remove';

export const Note = ({ id, content, handleRemove }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{content}</div>
      <button className={styles.removeBtn} onClick={() => handleRemove(id)}>
        <Remove />
      </button>
    </div>
  );
};
