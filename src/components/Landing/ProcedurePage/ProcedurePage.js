import React from 'react';
import { useParams } from 'react-router-dom';

import PROCEDURES_DETAILED_INFORMATION from '../../../data/ProceduredDetailedInformation';
import CallToActionBanner from '../Common/CallToActionBanner/CallToActionBanner';
import TextWithTitleBlock from '../../Common/TextFields/TextWithTitleBlock/TextWithTitleBlock';
import TextOnlyBlock from '../../Common/TextFields/TextOnlyBlock/TextOnlyBlock';
import ListBlock from '../../Common/TextFields/ListBlock/ListBlock';
import GoBackButton from '../Common/GoBackButton/GoBackButton';
import DecorationLine from '../../Common/DecorationLine/DecorationLine';
import styles from './ProcedurePage.module.scss';

export default function ProcedurePage(props) {
  const { id } = useParams();

  const currentProcedure = PROCEDURES_DETAILED_INFORMATION.find(
    (item) => item.id === id
  ) ?? {
    id: '',
    title: '',
    img: '',
    description: [],
  };

  const { title, img, description } = currentProcedure;
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>
          <div className={styles.imgWrap}>
            <img src={process.env.PUBLIC_URL + img} alt={title} />
          </div>
          <DecorationLine />
          {description.map((item) => {
            switch (item.type) {
              case 'textWithTitle':
                return (
                  <TextWithTitleBlock
                    key={item.id}
                    title={item.title}
                    content={item.content}
                  />
                );

              case 'list':
                return (
                  <ListBlock
                    key={item.id}
                    title={item.title}
                    content={item.content}
                  />
                );

              case 'textOnly':
                return <TextOnlyBlock key={item.id} content={item.content} />;

              default:
                return <div></div>;
            }
          })}
        </div>
      </div>
      <GoBackButton />
      <CallToActionBanner title="Отримати безкоштовну консультацію" />
    </div>
  );
}
