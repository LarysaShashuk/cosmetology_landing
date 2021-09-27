const CONTACT_INFORMATION = {
  address: {
    city: 'м.Рівне',
    street: 'вул. В. Чорновола 15',
  },
  googleMaps: 'https://goo.gl/maps/7fRCuNvxUZrtjWq29',
  phoneNumber: '+38 (067) 492 84 83',
  telegram: 'cosmetology_yarmoshuk',
  viber: '380674928483',
  workingHours: [
    {
      id: 1,
      day: 'Понеділок - Неділя',
      time: '08:00 - 20:00',
    },
  ],
  // daysOff: [
  //   {
  //     id: 1,
  //     day: 'Субота - Неділя',
  //   },
  // ],
  socialNetworks: [
    {
      id: 'instagram',
      icon: '/assets/icons/social/instagram.svg',
      link: 'https://www.instagram.com/cosmetology.yarmoshuk/',
    },
    {
      id: 'facebook',
      icon: '/assets/icons/social/facebook.svg',
      link: 'https://www.facebook.com/cosmetology.Felicita/',
    },
  ],
  name: 'Тетяна Ярмошук',
  position: 'косметолог-естетист',
  description: [
    {
      id: '1',
      text: 'Я косметолог-естетист з 25-тирічним медичним стажем. Маю великий досвід роботи з ін`єкціями. Сертифікати державного зразка по косметології, мезотерапії та плазмоліфтингу.',
    },
    {
      id: '2',
      text: 'В своїй професійній діяльності я використовую безпечні та ефективні методики. Всім своїм клієнтам гарантую індивідуальний підхід, якісні професійні препарати і прекрасний результат.',
    },
  ],
};

export default CONTACT_INFORMATION;
