import React from 'react';
import Header from '../Common/Header/Header';
import HomeHage from '../HomePage/HomePage';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <HomeHage />
    </div>
  );
}

export default App;
