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
    date: '18.12.2021, 14:40-15:40',
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
    date: '18.12.2021, 14:40-15:40',
    procedure: ['Кавітація', 'Пресо', 'Пресо', 'Пресо', 'Пресо', 'Пресо'],
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.',
  },
  {
    firstName: 'Ольга',
    lastName: 'Вишневська',
    fatherName: 'Віталівна',
    tags: ['Купероз', 'Алергія', 'Пілінг'],
    date: '18.12.2021, 14:40-15:40',
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
    date: '18.12.2021, 14:40-15:40',
    procedure: ['Дарсонваль', 'Мезотерапія голови'],
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.',
  },
  {
    firstName: 'Вікторія',
    lastName: 'Олешко',
    fatherName: 'Іванівна',
    tags: ['Пілінг', 'Маска'],
    date: '18.12.2021, 14:40-15:40',
    procedure: ['Чистка'],
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.',
  },
  {
    firstName: 'Ірина',
    lastName: 'Серпутько',
    fatherName: 'Віталівна',
    tags: ['Целюліт', 'Пресо', 'Ліполітики'],
    date: '18.12.2021, 14:40-15:40',
    procedure: ['Кавітація', 'Пресо'],
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.',
  },
  {
    firstName: 'Ольга',
    lastName: 'Вишневська',
    fatherName: 'Віталівна',
    tags: ['Купероз', 'Алергія', 'Пілінг'],
    date: '18.12.2021, 14:40-15:40',
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
    date: '18.12.2021, 14:40-15:40',
    procedure: ['Дарсонваль', 'Мезотерапія голови'],
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.',
  },
];

// Create the Label React component​​​​​​‌​​‌‌​​‌‌‌‌​​‌‌​‌‌​‌​​​​​ here
function ListUsers({ users }) {
  function compare(a, b) {
    if (a.lastName > b.lastName) {
      return -1;
    }
    if (a.lastName < b.lastName) {
      return 1;
    }
    return 0;
  }
  const newArr = users.sort(compare);
  const count = newArr.length;
  return (
    <div>
      <div className='user-count'>Users: {count}</div>
      <ul className='user-list'>
        {newArr.map(user => <li>{user.firstName} {user.lastName}</li>)}
      </ul>
    </div>
  )
}

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
  return <ListUsers users={[{ firstName: 'Donald', lastName: 'Knuth' }, { firstName: 'Ada', lastName: 'Lovelace' }]} />;
}

// Do not change

export default function CustomersBlock() {

  return (
    <>
      {Preview()}
      <ActionPanel />
      <div className={styles.container}>
        {customers.map((item, index) => (
          <CustomerSmallCard key={index} {...item} />
        ))}
      </div>
    </>
  );
}
