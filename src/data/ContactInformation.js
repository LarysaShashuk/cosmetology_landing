const CONTACT_INFORMATION = {
    address: 'м.Рівне, вул. Міцкевича 32 Готель Мир',
    phoneNumber: '+38 (063) 946 00 00',
    workingHours: [
        {
            id: 1,
            day: 'Понеділок',
            time: '08:00 - 20:00'
        },
        {
            id: 2,
            day: 'Вівторок',
            time: '08:00 - 20:00'
        },
        {
            id: 3,
            day: 'Середа',
            time: '08:00 - 20:00'
        },        {
            id: 4,
            day: 'Четвер',
            time: '08:00 - 20:00'
        },        {
            id: 5,
            day: 'П`ятниця',
            time: '08:00 - 20:00'
        }, {
            id: 6,
            day: 'Субота',
            time: '08:00 - 20:00'
        },
                
    ],
    deyOff: ['Неділя'],
    socialNetworks: [
        {
            id: 'instagram',
            icon: '/assets/icons/social/instagram.svg',
            link:'https://www.instagram.com'
        },
                {
            id: 'facebook',
            icon: '/assets/icons/social/facebook.svg',
            link:'https://www.facebook.com/'
        }
    ]

};

export default CONTACT_INFORMATION;