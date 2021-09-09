import React from 'react';
import ServiceCard from './ServiceCard';
import styles from './Services.module.scss';

export default function Services() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ми надаємо послуги:</h2>
      <div className={styles.content}>
        <ServiceCard
          title='Догляд за обличчям'
          img='/assets/images/face_procedure.jpg'
          path='/'
          direction='left'
        />
        <ServiceCard
          title='Догляд за тілом'
          img='/assets/images/body_procedure.jpg'
          path='/'
          direction='right'
        />
      </div>
    </div>
  );
}
