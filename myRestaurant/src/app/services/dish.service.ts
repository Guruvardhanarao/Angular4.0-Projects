import { Injectable } from '@angular/core';
import { Menu_Items } from '../shared/menu_items';
import { MenuItem } from '../shared/menu_item';

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): MenuItem[] {
      return Menu_Items;
  }

  getDish(id: number):MenuItem {
    return Menu_Items.filter((Menu_Items) => (Menu_Items.id === id))[0];
  }

  getFeaturedDish():MenuItem {
    return Menu_Items.filter((Menu_Items) => Menu_Items.featured)[0];
  }

}
