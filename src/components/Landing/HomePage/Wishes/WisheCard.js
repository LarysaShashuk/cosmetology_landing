import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WisheCard.module.scss';
import Arrow from '../../../Common/IconsSVG/Arrow';
export default function WisheCard(props) {
  const { title, id } = props;

  return (
    <Link to={`/wish/${id}`} className={styles.container}>
      <h3 className={styles.title}>{title}...</h3>
      <div className={styles.link}>{Arrow}</div>
    </Link>
  );
}
