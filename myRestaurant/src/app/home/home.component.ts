import { Component, OnInit } from '@angular/core';


import { MenuItem } from '../shared/menu_item';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: MenuItem;
  promotion: Promotion;

  constructor(private dishService: DishService,
              private promotionService: PromotionService) { }

  ngOnInit() {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }

}
