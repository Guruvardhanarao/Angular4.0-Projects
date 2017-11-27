import { Component, OnInit, Inject } from '@angular/core';

import { DishService } from '../services/dish.service';
import { PromotionsService } from '../services/promotions.service';
import { LeaderService } from '../services/leader.service';

import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { Leader } from '../shared/leader';
import { flyInOut, expand } from '../animations/app.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {
  dishes: Dish[];
  dishFeatured: Dish;
  promotionItems: Promotion[]; 
  leader: Leader;
  disErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;
  constructor(private dishService:DishService,
              private promotionService:PromotionsService,
              private leaderService: LeaderService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getDishes()
     .subscribe(dishes => this.dishes=dishes,
                errmess => this.disErrMess = <any>errmess);
    this.dishService.getFeatured()
     .subscribe(dishFeatured => this.dishFeatured = dishFeatured,
                errmess => this.disErrMess = <any>errmess);
    this.promotionService.getPromotingDishes()
      .subscribe(promotionItems => this.promotionItems = promotionItems,
                  errmess => this.promoErrMess = <any>errmess);
    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader,
                  errmess => this.leaderErrMess = errmess);
  }

  

}
