import React from 'react';
import styles from './ListBlock.module.scss';

export default function ListBlock(props) {
  const { title, content } = props;

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      {content.map((item) => {
        return (
          <div key={item.id} className={styles.contantWrap}>
            <div className={styles.line}></div>
            <div className={styles.subtitle}>
              {item.title}
              {item.content.map((element) => {
                return (
                  <span key={element.id} className={styles.text}>
                    {element.text}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
