import React from 'react';

import ActionPanel from '../../ActionPanel/ActionPanel';
import CustomerSmallCard from './CustomerSmallCard/CustomerSmallCard';
import styles from './CustomersBlock.module.scss';

const customers = [
  {
    firstName: 'Вікторія',
    lastName: 'Олешко',
    fatherName: 'Іванівна',
    tags: ['Пілінг', 'Маска'],
    data: '18.12.2021, 14:40-15:40',
    procedure: ['Чистка'],
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.',
  },
  {
    firstName: 'Ірина',
    lastName: 'Серпутько',
    fatherName: 'Віталівна',
    tags: [
      'Целюліт',
      'Пресо',
      'Ліполітики',
      'Пресо',
      'Пресо',
      'Пресо',
      'Пресо',
      'Пресо',
      'Пресо',
    ],
    data: '18.12.2021, 14:40-15:40',
    procedure: ['Кавітація', 'Пресо', 'Пресо', 'Пресо', 'Пресо', 'Пресо'],
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.',
  },
  {
    firstName: 'Ольга',
    lastName: 'Вишневська',
    fatherName: 'Віталівна',
    tags: ['Купероз', 'Алергія', 'Пілінг'],
    data: '18.12.2021, 14:40-15:40',
    procedure: ['Альгінатна маска'],
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.',
  },
  {
    firstName: 'Дарія',
    lastName: 'Гаврилова',
    fatherName: 'Вікторівна',
    tags: [
      'Мезотерапія',
      'Рідке волосся',
      'Себорея',
      'Целюліт',
      'Мезотерапія',
      'Рідке волосся',
      'Себорея',
      'Целюліт',
    ],
    data: '18.12.2021, 14:40-15:40',
    procedure: ['Дарсонваль', 'Мезотерапія голови'],
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.',
  },
  {
    firstName: 'Вікторія',
    lastName: 'Олешко',
    fatherName: 'Іванівна',
    tags: ['Пілінг', 'Маска'],
    data: '18.12.2021, 14:40-15:40',
    procedure: ['Чистка'],
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.',
  },
  {
    firstName: 'Ірина',
    lastName: 'Серпутько',
    fatherName: 'Віталівна',
    tags: ['Целюліт', 'Пресо', 'Ліполітики'],
    data: '18.12.2021, 14:40-15:40',
    procedure: ['Кавітація', 'Пресо'],
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.',
  },
  {
    firstName: 'Ольга',
    lastName: 'Вишневська',
    fatherName: 'Віталівна',
    tags: ['Купероз', 'Алергія', 'Пілінг'],
    data: '18.12.2021, 14:40-15:40',
    procedure: ['Альгінатна маска'],
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.',
  },
  {
    firstName: 'Дарія',
    lastName: 'Гаврилова',
    fatherName: 'Вікторівна',
    tags: [
      'Мезотерапія',
      'Рідке волосся',
      'Себорея',
      'Целюліт',
      'Мезотерапія',
      'Рідке волосся',
      'Себорея',
      'Целюліт',
    ],
    data: '18.12.2021, 14:40-15:40',
    procedure: ['Дарсонваль', 'Мезотерапія голови'],
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.',
  },
];

export default function CustomersBlock() {
  return (
    <>
      <ActionPanel />
      <div className={styles.container}>
        {customers.map((item, index) => (
          <CustomerSmallCard key={index} {...item} />
        ))}
      </div>
    </>
  );
}
