import React from 'react';
import styles from './TextWithTitleBlock.module.scss';

export default function TextWithTitleBlock(props) {
  const { title, content } = props;

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      {content.map((item) => {
        return (
          <div key={item.id}>
            <p className={styles.text}>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}
