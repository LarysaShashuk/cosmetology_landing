import React from 'react';
import cx from 'classnames';
import styles from './ServiceCard.module.scss';

export default function ServiceCard(props) {
  const { title, img, path, direction } = props;
  const isLeft = direction === 'left';

  return (
    <div className={styles.container}>
      <div className={cx([styles.title, !isLeft && styles.right])}>{title}</div>
      <div
        className={styles.content}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className={styles.gradient}>
          <a
            className={cx([styles.button, !isLeft && styles.right])}
            href={`${path}`}
          >
            Переглянути всі
          </a>
        </div>
      </div>
    </div>
  );
}
