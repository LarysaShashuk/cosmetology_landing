const CONTACT_INFORMATION = {
  address: {
    city: 'м.Рівне',
    street: 'вул. В. Чорновола 15',
  },
  phoneNumber: '+38 (063) 946 00 00',
  workingHours: [
    {
      id: 1,
      day: 'Понеділок - П`ятниця',
      time: '08:00 - 20:00',
    },
  ],
  daysOff: [
    {
      id: 1,
      day: 'Субота - Неділя',
    },
  ],
  socialNetworks: [
    {
      id: 'instagram',
      icon: '/assets/icons/social/instagram.svg',
      link: 'https://www.instagram.com',
    },
    {
      id: 'facebook',
      icon: '/assets/icons/social/facebook.svg',
      link: 'https://www.facebook.com/',
    },
  ],
};

export default CONTACT_INFORMATION;
