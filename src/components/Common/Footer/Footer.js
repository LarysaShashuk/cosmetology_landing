import React from 'react';
import { Link } from 'react-router-dom';

import Facebook from '../IconsSVG/Facebook';
import Instagram from '../IconsSVG/Instagram';
import CONTACT_INFORMATION from '../../../data/ContactInformation';
import styles from './Footer.module.scss';

export default function Footer() {
  const {
    address,
    googleMaps,
    phoneNumber,
    workingHours,
    daysOff,
    socialNetworks,
  } = CONTACT_INFORMATION;

  return (
    <div className={styles.commonContainer}>
      <div className={styles.container}>
        <div className={styles.contactInfoWrap}>
          <a
            href={googleMaps}
            target="_blank"
            rel="noreferrer"
            className={styles.address}
          >
            {address.city}
            <br />
            {address.street}
          </a>
          <a href={`tel:${phoneNumber}`} className={styles.phoneNumber}>
            {phoneNumber}
          </a>
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
        <Link to="/" className={styles.logoWrap}>
          <img
            src={process.env.PUBLIC_URL + '/assets/icons/logo_white.svg'}
            alt="logo"
          />
        </Link>
        <div className={styles.scheduleWrap}>
          <p className={styles.scheduleTitle}>Графік роботи:</p>
          {workingHours.map((item) => {
            return (
              <div key={item.id} className={styles.dayTimeWrap}>
                <p className={styles.day}>{item.day}</p>
                <p className={styles.time}>{item.time}</p>
              </div>
            );
          })}
          {daysOff &&
            daysOff.map((item) => {
              return (
                <div key={item.id} className={styles.dayTimeWrap}>
                  <p className={styles.day}>{item.day}</p>
                  <p className={styles.time}>Вихідний</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
