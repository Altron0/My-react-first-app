import { useState } from 'react';
import styles from './App.module.scss';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return ( 
    <div className={styles.layout}>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>
          Выйти из системы!
        </button>
        ) : (
        <button onClick={() => setIsLoggedIn(true)}>
          Войти в ситему
        </button>
        )
      }
    </div>
  )
}