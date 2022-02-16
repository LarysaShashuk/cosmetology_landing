import React from 'react';
import { useParams } from 'react-router-dom';

import PROCEDURES_INFORMATION from '../../../data/ProceduresCommonInformation';
import ProceduresCardsBlock from './ProceduresCardsBlock/ProceduresCardsBlock';
import ProceduresProgramBanner from './ProceduresProgramBanner/ProceduresProgramBanner';
import CallToActionBanner from '../Common/CallToActionBanner/CallToActionBanner';
import styles from './ProceduresGalleryPage.module.scss';

export default function ProceduresGalleryPage(pops) {
  const { id } = useParams();

  const currentProceduresGallery = PROCEDURES_INFORMATION.find(
    (item) => item.id === id
  ) ?? {
    id: '',
    title: '',
    proceduresGallery: [],
  };

  const { title, proceduresList, proceduresProgram } = currentProceduresGallery;

  return (
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <ProceduresCardsBlock proceduresList={proceduresList} />
        <ProceduresProgramBanner proceduresProgram={proceduresProgram} />
        <CallToActionBanner
          title="Отримати 
безкоштовну консультацію"
        />
      </div>
  );
}
