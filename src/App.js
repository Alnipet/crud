import { useEffect, useState } from 'react';
import styles from './App.module.css';

import { Reload } from './components/Icons/Reload';
import { Input } from './components/Input/Input';
import { Note } from './components/Note/Note';

function App() {
  const [state, setState] = useState([]);

  const handleUpdate = () => {
    fetch('http://localhost:7777/notes')
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  };

  const handleAdd = (data) => {
    fetch('http://localhost:7777/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    }).then(handleUpdate());
  };

  const handleRemove = (id) => {
    fetch(`http://localhost:7777/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      params: JSON.stringify(id),
    }).then(handleUpdate());
  };

  useEffect(() => {
    handleUpdate();
  }, [state]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Notes</h1>
        <button onClick={() => handleUpdate()} className={styles.btn}>
          <Reload />
        </button>
      </header>
      <main className={styles.main}>
        <div className={styles.mainInner}>
          {state.length !== 0 &&
            state.map((item) => {
              return (
                <Note
                  key={item.id}
                  id={item.id}
                  content={item.content}
                  handleRemove={handleRemove}
                />
              );
            })}
        </div>

        <Input handleAdd={handleAdd} />
      </main>
    </div>
  );
}

export default App;
