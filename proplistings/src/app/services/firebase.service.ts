import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  constructor(private angularfireDB: AngularFireDatabase) { }

  getListings() {
    return this.angularfireDB.list('listings').valueChanges();
  }

  getSelectedListing(id:number){
    return this.angularfireDB.object('/listing/'+id).valueChanges();
  }

}
