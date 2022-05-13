require('dotenv').config();

const portfolio = [
	{
        id: 1,
        isActive: true,
		title: 'Pampa Seltzer',
		slide: '01',
        url: '/project/pampa-hard-seltzer',
        imgURL: `${process.env.BASE_URL}/images/phs.png`,
        bgURL: `${process.env.BASE_URL}/images/slide-1.jpg`,
        tags: [
            'Hugo',
            'Forestry',
            'actor'
        ],
        theme: "dark"
	},
	{
        id: 2,
        isActive: false,
		title: 'Bravogames',
		slide: '02',
        url: '/project/bravogames',
        imgURL: `${process.env.BASE_URL}/images/bravogames.png`,
        bgURL: `${process.env.BASE_URL}/images/slide-2.jpg`,
        tags: [
            'wordpress',
            'identity'
        ],
        theme: "light"
	},
	{
        id: 3,
        isActive: false,
		title: 'Logo MHSC',
		slide: '03',
        url: '/project/MHSC',
        imgURL: `${process.env.BASE_URL}/images/logoMHSC.svg`,
        bgURL: `${process.env.BASE_URL}/images/slide-3.jpg`,
        tags: [
            'identity'
        ],
        theme: "dark"
	},
	{
        id: 4,
        isActive: false,
		title: 'Ballman NFT',
		slide: '04',
        url: '/project/ballman',
        imgURL: `${process.env.BASE_URL}/images/ballman.png`,
        bgURL: `${process.env.BASE_URL}/images/slide-4.jpg`,
        tags: [
            'front-end',
            'design'
        ],
        theme: "dark"
    },
	{
        id: 5,
        isActive: false,
		title: 'Lords of Meta',
		slide: '05',
        url: '/project/LOM',
        imgURL: `${process.env.BASE_URL}/images/LOMNFT.png`,
        bgURL: `${process.env.BASE_URL}/images/LOM-1200x675.jpg`,
        tags: [
            'front-end',
            'design'
        ],
        theme: "dark"
	},
	{
        id: 6,
        isActive: false,
		title: 'Test 5',
		slide: '05',
        url: '/project/test',
        imgURL: `${process.env.BASE_URL}/images/ballman.png`,
        bgURL: `${process.env.BASE_URL}/images/slide-4.jpg`,
        tags: [
            'front-end',
            'design'
        ],
        theme: "dark"
	}	
]

module.exports = portfolio
