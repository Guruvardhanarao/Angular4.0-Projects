import { Comment } from './comment';

export class Dish {
    id: number;
    name: string;
    image: string;
    description: string;
    featured: boolean;
    category: string;
    price: string;
    comments: Comment[];

}