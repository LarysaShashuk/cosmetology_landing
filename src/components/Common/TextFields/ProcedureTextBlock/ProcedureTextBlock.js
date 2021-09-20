import React from 'react';
import { Link } from 'react-router-dom';

import DecorationLine from '../../DecorationLine/DecorationLine';
import styles from './ProcedureTextBlock.module.scss';

export default function ProcedureTextBlock(props) {
  const { title, link, content } = props;

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <DecorationLine className={styles.line} />
      {content.map((item) => {
        return (
          <div key={item.id}>
            <p className={styles.text}>{item.text}</p>
          </div>
        );
      })}
      <Link to={`/procedure/${link}`} className={styles.button}>
        Детальніше
      </Link>
    </div>
  );
}
