import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { MenuItem } from '../shared/menu_item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

        dishes: MenuItem[];
        selectedDish: MenuItem;

  constructor(private dishService: DishService) {   }

  ngOnInit() {
       this.dishes = this.dishService.getDishes();
  }

  onSelect(dish:MenuItem) {
      this.selectedDish = dish;
  }

}
