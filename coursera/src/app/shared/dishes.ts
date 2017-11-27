import {Dish} from './dish';
import {Comment} from './comment';

export const DISHES: Dish[] = [
    {
      name:"Idly",
      image:"/assets/images/idly.jpg",
      category: "mains",
      label:"hot",
      price: "Rs.30",
      description: "A unique combination of Idly you never miss the taste of your mother.",
      comments: [
        {
          rating: 5,
          comment: "Imagine all the eatables, living in Guruvardhan Taste Food!",
          author: "John Lemon",
          date: "2012-10-16T17:57:28.556094Z"
        },
        {
          rating: 4,
          comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          author: "Paul McVites",
          date: "2014-09-05T17:57:28.556094Z"
        },
        {
          rating: 3,
          comment: "Eat it, just eat it!",
          author: "Michael Jaikishan",
          date: "2015-02-13T17:57:28.556094Z"
        },
        {
          rating: 4,
          comment: "Ultimate, Reaching for the stars!",
          author: "Ringo Starry",
          date: "2013-12-02T17:57:28.556094Z"
        },
        {
          rating: 2,
          comment: "It's your birthday, we're gonna party!",
          author: "25 Cent",
          date: "2011-12-02T17:57:28.556094Z"
        }
      ]
    },

    {
        name:"puri",
        image:"/assests/images/puri.jpg",
        category: "mains",
        label: "hot",
        price: "Rs. 35",
        description: "I love to Eat at Guruvardhan Taste Foods",
        comments: [
            {
                rating: 5,
                comment: "Imagine all the eatables, living in Guruvardhan Taste Food!",
                author: "John Lemon",
                date: "2012-10-16T17:57:28.556094Z"
              },
              {
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Paul McVites",
                date: "2014-09-05T17:57:28.556094Z"
              },
              {
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Michael Jaikishan",
                date: "2015-02-13T17:57:28.556094Z"
              },
              {
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Ringo Starry",
                date: "2013-12-02T17:57:28.556094Z"
              }
        ]
    },

    {
        name: "dosa",
        image: "/assets/images/dosa.jpg",
        price: "Rs. 25",
        category: "mains",
        label:"hot",
        description: "We are offering 50 varities of dosas,each one is unique.",
        comments: [
            {
                rating: 5,
                comment: "Imagine all the eatables, living in Guruvardhan Taste Food!",
                author: "John Lemon",
                date: "2012-10-16T17:57:28.556094Z"
              },
              {
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Paul McVites",
                date: "2014-09-05T17:57:28.556094Z"
              },
              {
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Michael Jaikishan",
                date: "2015-02-13T17:57:28.556094Z"
              },
              {
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Ringo Starry",
                date: "2013-12-02T17:57:28.556094Z"
              }
        ]
    },

    {
        name: "Garelu",
        image: "/assets/images/garelu.jpg",
        price: "Rs. 20",
        category: "mains",
        label:"hot",
        description: "We are offering 50 varities of dosas,each one is unique.",
        comments: [
            {
                rating: 5,
                comment: "Imagine all the eatables, living in Guruvardhan Taste Food!",
                author: "John Lemon",
                date: "2012-10-16T17:57:28.556094Z"
              },
              {
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Paul McVites",
                date: "2014-09-05T17:57:28.556094Z"
              },
              {
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Michael Jaikishan",
                date: "2015-02-13T17:57:28.556094Z"
              },
              {
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Ringo Starry",
                date: "2013-12-02T17:57:28.556094Z"
              }
        ]
    }
   
];