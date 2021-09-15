import React from 'react';
import { Link } from 'react-router-dom';

import CONTACT_INFORMATION from '../../../data/ContactInformation';
import styles from './Footer.module.scss';

export default function Footer() {
  const { address, phoneNumber, workingHours, daysOff, socialNetworks } =
    CONTACT_INFORMATION;

  return (
    <div className={styles.commonContainer}>
      <div className={styles.container}>
        <div className={styles.contactInfoWrap}>
          <p className={styles.address}>
            {address.city}
            <br />
            {address.street}
          </p>
          <a href={`tel:${phoneNumber}`} className={styles.phoneNumber}>
            {phoneNumber}
          </a>
          <div className={styles.socialNetworks}>
            {socialNetworks.map((item) => {
              return (
                <a href={item.link} key={item.id}>
                  <img src={item.icon} alt="socialNetworks" />
                </a>
              );
            })}
          </div>
        </div>
        <Link to="/" className={styles.logoWrap}>
          <img src="/assets/icons/logo_white.svg" alt="logo" />
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
          {daysOff.map((item) => {
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
