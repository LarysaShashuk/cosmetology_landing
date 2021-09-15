import React from 'react';

import { Link } from 'react-router-dom';
import styles from './ProcedureCard.module.scss';

export default function ProcedureCard(props) {
  const { title, img, price, id } = props;

  return (
    <div className={styles.container}>
      <div
        className={styles.imgWrap}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.price}>{price}</h4>
        <Link to={`/procedure/${id}`} className={styles.button}>
          Детальніше
        </Link>
      </div>
    </div>
  );
}
