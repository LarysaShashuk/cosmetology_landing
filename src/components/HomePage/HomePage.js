import React from 'react';
import SALE_INFORMATION from '../../data/SaleInformation';

import PromotionBanner from '../Common/PromotionBanner/PromotionBanner';
import Introduction from './Introduction/Introduction';
import Services from './Services/Services';
import Wishes from './Wishes/Wishes';
import CallToActionBanner from '../Common/CallToActionBanner/CallToActionBanner';
import Gallery from './Gallery/Gallery';
import Footer from '../Common/Footer/Footer';

export default function HomeHage() {
  return (
    <>
      <Introduction />
      <PromotionBanner
        title={SALE_INFORMATION.title}
        subtitle={SALE_INFORMATION.subtitle}
        endTime={SALE_INFORMATION.endTime}
        img={SALE_INFORMATION.img}
      />
      <Services />
      <Wishes />
      <CallToActionBanner title='Записатися на прийом' />
      <Gallery />
      <Footer />
    </>
  );
}
