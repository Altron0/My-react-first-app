import styles from './App.module.scss';
import { Details } from './Details';
import { useState, useEffect } from 'react';

const MENU = [
  {
  name: 'Maks',
  id: '0',
  },
  {
    name: 'Danil',
    id: '1',
  }
];

export function App() {

  const [details, setDetails] = useState({
    isLoading: true,
    title: 'Null',
    discriptions: 'React + Vita',
    button: 'Click',
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDetails(prev => {
        return {
          ...prev,
          isLoading: false
        }
      });
    }, 2000)
    return () => {
      clearTimeout(timeout)
      console.log('The timeOut is clear!');
    }
  }, []);

  return (
    <div className={styles.layout}> 
      {details.isLoading ? (<p>Loading....</p>) : (
      <Details details={details} setDetails={setDetails}/>
      )}
    </div>
  )
}