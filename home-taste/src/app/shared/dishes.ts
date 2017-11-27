import { Dish } from './dish';

export const dishes: Dish[] = [
    {
        id: 0,
        name: 'idly',
        image: '/assets/images/idly.JPG',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        featured: true,
        category: "tiffin",
        price: "RS. 50",
        comments: [
            {
                comment:'tasty tasty tasty .........',
                author:'Chiru',
                rating:5,
                date:"2017-01-16T17:57:28.556094Z"
            },

            {
                comment:'super super super .........',
                author:'veeru',
                rating:4,
                date:"2017-07-16T17:57:28.556094Z"
            },

        ]

    },

    {
        id: 1,
        name: 'puri',
        image: '/assets/images/puri.jpg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        featured: true,
        category: "tiffin",
        price: "RS. 60",
        comments: [
            {
                comment:'tasty tasty tasty .........',
                author:'Vinitha',
                rating:3,
                date:"2016-01-16T17:57:28.556094Z"
            },

            {
                comment:'super super super .........',
                author:'Harsha',
                rating:5,
                date:"2017-05-16T17:57:28.556094Z"
            },

        ]

    },

    {
        id: 2,
        name: 'dosa',
        image: '/assets/images/dosa.jpg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        featured: true,
        category: "tiffin",
        price: "RS. 30",
        comments: [
            {
                comment:'tasty tasty tasty .........',
                author:'raju',
                rating:3,
                date:"2012-04-16T17:57:28.556094Z"
            },

            {
                comment:'super super super .........',
                author:'Venky',
                rating:4,
                date:"2016-07-16T17:57:28.556094Z"
            },

        ]

    }
];