import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.scss';

export default function ServiceCard(props) {
  const { title, img, path, direction } = props;
  const isLeft = direction === 'left';

  return (
    <div className={styles.container}>
      <Link to={`/procedures_gallery/${path}`} className={cx([styles.title, !isLeft && styles.right])}>{title}</Link>
      <div
        className={styles.content}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + img})` }}
      >
        <div className={styles.gradient}>
          <Link
            className={cx([styles.button, !isLeft && styles.right])}
            to={`/procedures_gallery/${path}`}
          >
            Переглянути всі
          </Link>
        </div>
      </div>
    </div>
  );
}
