import React from 'react';

import PROCEDURES_COMMON_INFORMATION from '../../../../data/ProceduresCommonInformation';
import ServiceCard from './ServiceCard';
import styles from './Services.module.scss';

export default function Services() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ми надаємо послуги:</h2>
      <div className={styles.content}>
        {PROCEDURES_COMMON_INFORMATION.map((item) => {
          return (
            <ServiceCard
              key={item.id}
              title={item.title}
              img={item.img}
              direction={item.direction}
              path={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
