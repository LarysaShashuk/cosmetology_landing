import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../Common/Header/Header';
import GoBackButton from '../Common/GoBackButton/GoBackButton';
import CallToActionBanner from '../Common/CallToActionBanner/CallToActionBanner';
import Footer from '../../Common/Footer/Footer';
import DecorationLine from '../../Common/DecorationLine/DecorationLine';
import TextWithTitleBlock from '../../Common/TextFields/TextWithTitleBlock/TextWithTitleBlock';
import TextOnlyBlock from '../../Common/TextFields/TextOnlyBlock/TextOnlyBlock';
import ListBlock from '../../Common/TextFields/ListBlock/ListBlock';
import ProcedureTextBlock from '../../Common/TextFields/ProcedureTextBlock/ProcedureTextBlock';
import WISHES_INFORMATION from '../../../data/WishesInformation';
import styles from './WishPage.module.scss';

export default function WishPage(props) {
  const { id } = useParams();

  const currentWish = WISHES_INFORMATION.find((item) => item.id === id) ?? {
    id: '',
    title: '',
    description: [],
  };

  const { title, description } = currentWish;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.content}>
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

              case 'procedure':
                return (
                  <ProcedureTextBlock
                    key={item.id}
                    title={item.title}
                    link={item.link}
                    content={item.content}
                  />
                );

              default:
                return <div key={item.id}></div>;
            }
          })}
        </div>
      </div>
      <GoBackButton />
      <CallToActionBanner title="Отримати безкоштовну консультацію" />
      <Footer />
    </>
  );
}
