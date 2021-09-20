import React from 'react';
import styles from './TextOnlyBlock.module.scss';

export default function TextOnlyBlock(props) {
  const { content } = props;

  return (
    <div className={styles.container}>
      {content.map((item) => {
        return (
          <div key={item.id}>
            <p className={styles.text}> {item.text}</p>
          </div>
        );
      })}
    </div>
  );
}
