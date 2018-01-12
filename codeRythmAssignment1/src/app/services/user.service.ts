import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  constructor(private angularFireDatabase: AngularFireDatabase) { }


  getUsers() {
    return this.angularFireDatabase.list('/users').valueChanges();
  }

}
