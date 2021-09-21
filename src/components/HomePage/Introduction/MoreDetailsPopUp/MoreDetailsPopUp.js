import React, { useRef } from 'react';

import CONTACT_INFORMATION from '../../../../data/ContactInformation';
import useOutsideClick from '../../../../services/useOutsideClick';
import Facebook from '../../../Common/IconsSVG/Facebook';
import Instagram from '../../../Common/IconsSVG/Instagram';
import Close from '../../../Common/IconsSVG/Close';
import styles from './MoreDetailsPopUp.module.scss';

export default function MoreDetailsPopUp(props) {
  const { handleClose } = props;
  const { name, position, description, socialNetworks } = CONTACT_INFORMATION;

  const height = document.documentElement.scrollHeight;
  const positionWindow = window.pageYOffset;
  const { innerWidth } = window;
  const getMarginTop = (width) => {
    switch (true) {
      case width < 600:
        return 70;

      case width > 600 && width < 735:
        return 100;

      case width > 735:
        return 140;

      default:
        return 50;
    }
  };

  const ref = useRef();

  useOutsideClick(ref, () => {
    handleClose();
  });

  return (
    <div className={styles.container} style={{ height: `${height}px` }}>
      <div
        className={styles.innerWrap}
        ref={ref}
        style={{ marginTop: `${+positionWindow + getMarginTop(innerWidth)}px` }}
      >
        <div className={styles.imgWrap}>
          <div
            className={styles.backgroundImg}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/lavenders.png)`,
            }}
          ></div>
          <div
            className={styles.additionalImg}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/additional_photo.png)`,
            }}
          ></div>
        </div>
        <div className={styles.content}>
          <div onClick={() => handleClose()} className={styles.closeButton}>
            {Close}
          </div>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.position}>{position}</p>
          <div className={styles.line}></div>
          <div className={styles.description}>
            {description.map((item) => {
              return (
                <p key={item.id} className={styles.descriptionItem}>
                  {item.text}
                </p>
              );
            })}
          </div>

          <div className={styles.socialNetworks}>
            {socialNetworks.map((item) => {
              return (
                <a
                  href={item.link}
                  key={item.id}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.id === 'facebook'
                    ? Facebook
                    : item.id === 'instagram'
                    ? Instagram
                    : null}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
