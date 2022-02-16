import React from 'react';
import SALE_INFORMATION from '../../../data/SaleInformation';

import Introduction from './Introduction/Introduction';
import PromotionBanner from '../Common/PromotionBanner/PromotionBanner';
import Services from './Services/Services';
import Wishes from './Wishes/Wishes';
import CallToActionBanner from '../Common/CallToActionBanner/CallToActionBanner';
import Gallery from './Gallery/Gallery';
import styles from './HomePage.module.scss';

export default function HomeHage() {
  return (
    <div className={styles.container}>
      <Introduction />
      <PromotionBanner
        title={SALE_INFORMATION.title}
        subtitle={SALE_INFORMATION.subtitle}
        endTime={SALE_INFORMATION.endTime}
        img={SALE_INFORMATION.img}
      />
      <Services />
      <Wishes />
      <CallToActionBanner title="Записатися на прийом" />
      <Gallery />
    </div>
  );
}
