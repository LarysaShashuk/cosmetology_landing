import React from 'react';

import ButtonsBar from '../../Common/ButtonsBar/ButtonsBar';
import ContactInformation from './FormBlocks/ContactInformation/ContactInformation';
import IndividualContraindications from './FormBlocks/IndividualContraindications/IndividualContraindications';
import AppointmentsPlan from './FormBlocks/AppointmentsPlan/AppointmentsPlan';
import CustomerFaceMap from './FormBlocks/CustomerFaceMap/CustomerFaceMap';
import CustomerBodyMap from './FormBlocks/CustomerBodyMap/CustomerBodyMap';
import AccordionBlock from './AccordionBlock/AccordionBlock';
import HomeCareRecommendations from './FormBlocks/HomeCareRecommendations/HomeCareRecommendations';
import AdditionalRecommendations from './FormBlocks/AdditionalRecommendations/AdditionalRecommendations';
import styles from './AddCustomerBlock.module.scss';

export default function AddCustomerBlock() {
  return (
    <div>
      <div>
        <AccordionBlock title="Основна інформація">
          <ContactInformation/>
        </AccordionBlock>

        <AccordionBlock title="Індивідуальні протипокази">
         <IndividualContraindications/>
        </AccordionBlock>

        <AccordionBlock title="Графік відвідувань">
         <AppointmentsPlan/>
        </AccordionBlock>

        <AccordionBlock title="Карта обличчя клієнта">
          <CustomerFaceMap/>
        </AccordionBlock>

        <AccordionBlock title="Карта тіла клієнта">
          <CustomerBodyMap/>
        </AccordionBlock>

        <AccordionBlock title="Рекомендації для домашнього догляду">
          <HomeCareRecommendations/>
        </AccordionBlock>

        <AccordionBlock title="Додаткові рекомендації">
          <AdditionalRecommendations/>
        </AccordionBlock>
      </div>

      <div className={styles.buttonsBlock}>
        <ButtonsBar
          handleSave={() => console.log('find')}
          handleClose={() => console.log('close')}
          saveButtonName="Зберегти"
          closeButtonName="Закрити"
        />
      </div>
    </div>
  );
}
