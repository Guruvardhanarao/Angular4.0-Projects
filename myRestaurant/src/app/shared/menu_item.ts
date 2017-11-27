import {Comment} from './comment';

export class MenuItem {
    id:number;
    name: string;
    price: string;
    category: string;
    image: string;
    featured: boolean;
    description: string;
    comments: Comment[];
}