import React from 'react';

import GALLERY_INFORMATION from '../../../../data/GalleryInformation';
import styles from './Gallery.module.scss';

export default function Gallery() {
  return (
    <div className={styles.container}>
      <div className={styles.additionalContainer}>
        {GALLERY_INFORMATION.map((item) => {
          return (
            <img
              className={styles.image}
              src={process.env.PUBLIC_URL + item.img}
              key={item.id}
              alt={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
