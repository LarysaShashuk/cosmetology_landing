const PROCEDURES_COMMON_INFORMATION = [
  {
    id: 'face_procedures',
    title: 'Догляд за обличчям',
    img: '/assets/images/face_procedure.jpg',
    direction: 'left',
    proceduresProgram: {
      id: 'face_procedures_program',
      title:
        'Програми лікування акне, постакне, розацеа, гіперпігментації, anti-age',
      img: '/assets/images/face_procedures/face_procedure_program.jpg',
    },
    proceduresList: [
      {
        id: 'cosmetic_facial_massage',
        title: 'Косметичний масаж',
        img: '/assets/images/face_procedures/face_procedure_1.jpg',
        price: 'від 150 грн',
      },
      {
        id: 'microdermabrasion',
        title: 'Мікродермабразія',
        img: '/assets/images/face_procedures/face_procedure_4.jpg',
        price: 'від 100 грн',
      },
      {
        id: 'electroporation',
        title: 'Електропорація',
        img: '/assets/images/face_procedures/face_procedure_6.jpg',
        price: '400 грн',
      },
      {
        id: 'microcurrent_therapy',
        title: 'Мікрострумова терапія',
        img: '/assets/images/face_procedures/face_procedure_7.jpg',
        price: 'від 150 грн',
      },
      {
        id: 'darsonvalization',
        title: 'Дарсонвалізація',
        img: '/assets/images/face_procedures/face_procedure_3.jpg',
        price: 'від 150 грн',
      },
    ],
  },
  {
    id: 'body_procedures',
    title: 'Догляд за тілом',
    img: '/assets/images/body_procedure.jpg',
    direction: 'right',
    proceduresProgram: {
      id: 'body_procedures_program',
      title: 'Антицелюлітні програми, програми схуднення та корекції ваги',
      img: '/assets/images/body_procedures/body_procedure_program.jpg',
    },
    proceduresList: [
      {
        id: 'RF_lifting',
        title: 'RF-ліфтинг',
        img: '/assets/images/body_procedures/body_procedure_1.jpg',
        price: 'від 200 грн',
      },
      {
        id: 'injectable_lipolysis',
        title: 'Ін`єкційний ліполіз',
        img: '/assets/images/body_procedures/body_procedure_5.jpg',
        price: 'від 400 грн',
      },
      {
        id: 'cavitation',
        title: 'Кавітація',
        img: '/assets/images/body_procedures/body_procedure_2.jpg',
        price: 'від 200 грн',
      },
    ],
  },
];

export default PROCEDURES_COMMON_INFORMATION;
