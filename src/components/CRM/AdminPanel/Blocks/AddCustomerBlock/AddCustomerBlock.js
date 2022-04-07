import React from 'react';

import ButtonsBar from '../../Common/ButtonsBar/ButtonsBar';
import ContactInformation from './FormBlocks/ContactInformation/ContactInformation';
import IndividualContraindications from './FormBlocks/IndividualContraindications/IndividualContraindications';
import AppointmentsPlan from './FormBlocks/AppointmentsPlan/AppointmentsPlan';
import CustomerFaceMap from './FormBlocks/CustomerFaceMap/CustomerFaceMap';
import CustomerBodyMap from './FormBlocks/CustomerBodyMap/CustomerBodyMap';
import AccordionBlock from './AccordionBlock/AccordionBlock';
import HomeCare from './FormBlocks/HomeCare/HomeCare';
import AdditionalRecommendations from './FormBlocks/AdditionalRecommendations/AdditionalRecommendations';
import styles from './AddCustomerBlock.module.scss';

export default function AddCustomerBlock() {
  return (
    <div className={styles.container}>
      <h1
        className={styles.title}
      >
        Створити нового клієнта
      </h1>

      <div>
        <AccordionBlock error title="Основна інформація">
          <ContactInformation />
        </AccordionBlock>

        <AccordionBlock pending title="Індивідуальні протипокази">
          <IndividualContraindications />
        </AccordionBlock>

        <AccordionBlock pending title="Графік відвідувань">
          <AppointmentsPlan />
        </AccordionBlock>

        <AccordionBlock pending title="Карта обличчя клієнта">
          <CustomerFaceMap />
        </AccordionBlock>

        <AccordionBlock pending title="Карта тіла клієнта">
          <CustomerBodyMap />
        </AccordionBlock>

        <AccordionBlock success title="Домашній догляд">
          <HomeCare />
        </AccordionBlock>

        <AccordionBlock success title="Додаткові рекомендації">
          <AdditionalRecommendations />
        </AccordionBlock>
      </div>

      <div className={styles.buttonsBlock}>
        <ButtonsBar
          handleSave={() => console.log('find')}
          handleClose={() => console.log('close')}
          saveButtonName="Зберегти"
          closeButtonName="Очистити"
        />
      </div>
    </div>
  );
}
