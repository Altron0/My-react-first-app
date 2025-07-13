import { useContext, useState } from 'react';
import styles from './App.module.scss';
import { Header } from './Header'
import { AuthContext } from './AuthContext';


export function App() {

  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
  
  return (
    <div className={styles.layout}>
      <Header />
      
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>
          Войти в систему
        </button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Выйти из системы</button>
      )}
    </div>
  )
}