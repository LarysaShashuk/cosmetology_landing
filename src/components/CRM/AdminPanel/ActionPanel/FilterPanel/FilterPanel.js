import React from 'react';

import ButtonsBar from '../../Common/ButtonsBar/ButtonsBar';
import FilteringOptionBlock from './FilteringOptionBlock/FilteringOptionBlock.js';
import styles from './FilterPanel.module.scss';

const filters = [
  {
    id: '1',
    title: 'Тип шкіри',
    content: ['суха', 'нормальна', 'масна', 'комбінована'],
  },
  {
    id: '2',
    title: 'Морфотип',
    content: [
      'втомлений',
      'дрібно зморшкуватий',
      'набряково деформуючий',
      'змішаний',
      'мускульний',
    ],
  },
  {
    id: '3',
    title: 'Стан шкіри',
    content: [
      'проблемна',
      'чутлива',
      'зневоднена',
      'суха подразнена',
      'масна',
      'тонка',
      'розацеа',
      'вугрові висипання',
      'пігментація',
      'пушковість на обличчі',
      'гірсутизм',
      'шкірні захворювання бактеріального та вірусного характеру',
    ],
  },
  {
    id: '4',
    title: 'Процедури для обличчя',
    content: [
      'Косметичний масаж',
      'Дарсонвалізація',
      'Електропорація',
      'Мікродермабразія',
      'Пілінг',
      'Фонофорез',
      'Мікроструми',
      'Мезотерапія',
      'Біоревіталізація',
      'RF-ліфтинг',
      'Косметичний догляд',
      'Плазмоліфтинг',
    ],
  },
  {
    id: '5',
    title: 'Процедури для тіла',
    content: [
      'Мезодисолюція',
      'RF-ліфтинг',
      'Кавітація',
      'Пресотерапія',
      'Плазмоліфтинг',
      'Дарсонвалізація',
      'Електропорація',
      'Мікродермабразія',
      'Фонофорез',
      'Мікроструми',
      'Мезотерапія',
      'Вакуумний масаж',
    ],
  },
];

export default function FilterPanel() {
  return (
    <div className={styles.container}>
      <div className={styles.filteringOptionContainer}>
        {filters.map((item) => (
          <FilteringOptionBlock
            title={item.title}
            content={item.content}
            key={item.id}
          />
        ))}
      </div>

      <div className={styles.buttonsBlock}>
        <ButtonsBar
          handleSave={() => console.log('find')}
          handleClose={() => console.log('close')}
          saveButtonName='Знайти'
          closeButtonName='Закрити'
        />
      </div>
    </div>
  );
}
