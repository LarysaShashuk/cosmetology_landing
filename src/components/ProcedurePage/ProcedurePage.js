import React from 'react';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router';

import PROCEDURES_DETAILED_INFORMATION from '../../data/ProceduredDetailedInformation';
import CallToActionBanner from '../Common/CallToActionBanner/CallToActionBanner';
import TextWithTitleBlock from '../Common/TextFields/TextWithTitleBlock/TextWithTitleBlock';
import TextOnlyBlock from '../Common/TextFields/TextOnlyBlock/TextOnlyBlock';
import ListBlock from '../Common/TextFields/ListBlock/ListBlock';
import GoHomeButton from '../Common/GoHomeButton/GoHomeButton';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import styles from './ProcedurePage.module.scss';

function ProcedurePage(props) {
  const { history } = props;
  const { id } = useParams();
  console.log(history);

  const handleGoBack = () => {
    return history.goBack();
  };

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
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>
          <div className={styles.imgWrap}>
            <img src={img} alt={title} />
          </div>
          <div className={styles.line}></div>
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
      <GoHomeButton handleGoBack={handleGoBack} />
      <CallToActionBanner title="Отримати безкоштовну консультацію" />
      <Footer />
    </>
  );
}

export default withRouter(ProcedurePage);
