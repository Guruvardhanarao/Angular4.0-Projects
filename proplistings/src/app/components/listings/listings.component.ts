import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings:any;

  constructor(
    private fs: FirebaseService,
    
  ) { }

  ngOnInit() {

      this.listings = this.fs.getListings().subscribe(listings => {
      this.listings = listings;
      console.log(listings);
    
    });

    
  }

}
