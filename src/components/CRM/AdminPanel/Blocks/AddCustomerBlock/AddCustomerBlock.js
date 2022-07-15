import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cleanCustomer, createCustomer } from '../../../../../redux/actions/customerActions';
import ButtonsBar from '../../Common/ButtonsBar/ButtonsBar';
import ContactInformation from './FormBlocks/ContactInformation/ContactInformation';
import Tags from './FormBlocks/Tags/Tags';
import IndividualContraindications from './FormBlocks/IndividualContraindications/IndividualContraindications';
import AppointmentsPlan from './FormBlocks/AppointmentsPlan/AppointmentsPlan';
import CustomerFaceMap from './FormBlocks/CustomerFaceMap/CustomerFaceMap';
import CustomerBodyMap from './FormBlocks/CustomerBodyMap/CustomerBodyMap';
import AccordionBlock from './AccordionBlock/AccordionBlock';
import HomeCare from './FormBlocks/HomeCare/HomeCare';
import AdditionalRecommendations from './FormBlocks/AdditionalRecommendations/AdditionalRecommendations';
import styles from './AddCustomerBlock.module.scss';

export default function AddCustomerBlock() {

  let dispatch = useDispatch();

  const handleAddArticle = (form) => {
    dispatch(createCustomer(form));
    return;
  };

  const [customer, setCustomer] = useState({
    contactInformation: {},
    tags: [],
    individualContraindications: {},
    appointmentsPlan: [],
    customerFaceMap: {},
    customerBodyMap: {
      bodyParameters: {},
      cellulite: [],
      results: [],
    },
    homeCare: {},
    additionalRecommendations: {},
  })

  const state = useSelector((state) => state);

  useEffect(() => {
    setCustomer(state.customer);
  }, [state.customer])


  const { contactInformation,
    tags,
    individualContraindications,
    appointmentsPlan,
    customerFaceMap,
    customerBodyMap,
    homeCare,
    additionalRecommendations,
  } = customer;

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }


  return (
    <div className={styles.container}>
      <h1
        className={styles.title}
      >
        Створити нового клієнта
      </h1>

      <div>
        <AccordionBlock status={isEmpty(contactInformation) ? 'error' : 'success'} title="Основна інформація">
          <ContactInformation />
        </AccordionBlock>

        <AccordionBlock status={!!tags[0] ? 'success' : 'pending'} title="Теги">
          <Tags />
        </AccordionBlock>

        <AccordionBlock status={isEmpty(individualContraindications) ? 'pending' : 'success'} title="Індивідуальні протипокази">
          <IndividualContraindications />
        </AccordionBlock>

        <AccordionBlock status={!!appointmentsPlan[0] ? 'success' : 'pending'} title="Графік відвідувань">
          <AppointmentsPlan />
        </AccordionBlock>

        <AccordionBlock status={!!customerFaceMap[0] ? 'success' : 'pending'} title="Карта обличчя клієнта">
          <CustomerFaceMap />
        </AccordionBlock>

        <AccordionBlock status={(!isEmpty(customerBodyMap.bodyParameters) || !!customerBodyMap.cellulite[0] || !!customerBodyMap.results[0]) ? 'success' : 'pending'} title="Карта тіла клієнта">
          <CustomerBodyMap />
        </AccordionBlock>

        <AccordionBlock status={isEmpty(homeCare) ? 'pending' : 'success'} title="Домашній догляд">
          <HomeCare />
        </AccordionBlock>

        <AccordionBlock status={isEmpty(additionalRecommendations) ? 'pending' : 'success'} title="Додаткові рекомендації">
          <AdditionalRecommendations />
        </AccordionBlock>
      </div>

      <div className={styles.buttonsBlock}>
        <ButtonsBar
          handleSave={() => {
            console.log(customer)
            handleAddArticle(customer)
          }}
          handleClose={() => dispatch(cleanCustomer())}
          saveButtonName="Зберегти"
          closeButtonName="Очистити"
          disabled={isEmpty(contactInformation)}
        />
      </div>
    </div>
  );
}
