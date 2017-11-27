import { MenuItem } from './menu_item';
import {Comment} from './comment';

export const Menu_Items: MenuItem[] = [
    {
        id: 0,
        name: "idly",
        price: "Rs. 20",
        image: "/assets/images/idly.jpg",
        featured: true,
        description: "Our Idly are best in the city with good taste and low price. Along with we providing four type of chaties. Eat once then see....",
        category: "Tiffin",
        comments: [
            {
                rating:5,
                comment: "Super Idly",
                author: "guru",
                date: "2012-10-16T17:57:28.556094Z"
            }
        ]
    },

    {
        id: 1,
        name: "puri",
        price: "Rs. 30",
        image: "/assets/images/puri.jpg",
        featured: false,
        description: "Our puri are best in the city with good taste and low price. Along with we providing four type of chaties. Eat once then see....",
        category: "Tiffin",
        comments: [
            {
                rating:3,
                comment: "Super Puri",
                author: "veeru",
                date: "2017-8-16T17:57:28.556094Z"
            }
        ]
    },

    {
        id: 2,
        name: "dosa",
        price: "Rs. 30",
        image: "/assets/images/dosa.jpg",
        featured: false,
        description: "Our Dosa are best in the city with good taste and low price. Along with we providing four type of chaties. Eat once then see....",
        category: "Tiffin",
        comments: [
            {
                rating:5,
                comment: "Super Dosa",
                author: "Chiru",
                date: "2017-10-16T17:57:28.556094Z"
            }
        ]
    },

    {
        id: 3,
        name: "Bonda",
        price: "Rs. 20",
        image: "/assets/images/bonda.jpg",
        featured: false,
        description: "Our Bonda are best in the city with good taste and low price. Along with we providing four type of chaties. Eat once then see....",
        category: "Tiffin",
        comments: [
            {
                rating: 2,
                comment: "Not good to eat. oily Bondas",
                author: "Bhavani",
                date: "2015-10-16T17:57:28.556094Z"
            },
            {
                rating:4,
                comment: "good to eat. fresh Bondas",
                author: "Raj",
                date: "2013-10-16T17:57:28.556094Z"
            },
            {
                rating:2,
                comment: "oily Bondas im not liked here",
                author: "Roja",
                date: "2017-10-16T17:57:28.556094Z"
            }
        ]
    },

    {
        id: 4,
        name: "garelu",
        price: "Rs. 40",
        image: "/assets/images/garelu.jpg",
        featured: false,
        description: "Our garelu are best in the city with good taste and low price. Along with we providing four type of chaties. Eat once then see....",
        category: "Tiffin",
        comments: [
            {
                rating:5,
                comment: "Super Garelu",
                author: "Harsha",
                date: "2016-01-16T17:57:28.556094Z"
            }
        ]
    },

    {
        id: 5,
        name: "Chapati",
        price: "Rs. 20",
        image: "/assets/images/chapati.jpg",
        featured: false,
        description: "Our chapati are best in the city with good taste and low price. Along with we providing four type of chaties. Eat once then see....",
        category: "Tiffin",
        comments: [
            {
                rating:4,
                comment: "Super Chapati",
                author: "Poori",
                date: "2017-08-16T17:57:28.556094Z"
            }
        ]
    },

    {
        id: 6,
        name: "Upma",
        price: "Rs. 20",
        image: "/assets/images/upma.jpg",
        featured: false,
        description: "Our upma are best in the city with good taste and low price. Along with we providing four type of chaties. Eat once then see....",
        category: "Tiffin",
        comments: [
            {
                rating:3,
                comment: "Super Upma",
                author: "Umarao",
                date: "2011-10-16T17:57:28.556094Z"
            }
        ]
    },

    {
        id: 7,
        name: "parota",
        price: "Rs. 20",
        image: "/assets/images/parota.jpg",
        featured: false,
        description: "Our parota are best in the city with good taste and low price. Along with we providing four type of chaties. Eat once then see....",
        category: "Tiffin",
        comments: [
            {
                rating:2,
                comment: "not good",
                author: "Prasanna",
                date: "2015-07-16T17:57:28.556094Z"
            }
        ]
    },
];