import { Component } from '@angular/core';
import { UserService  } from './services/user.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'CodeRythm Assignment';
  users:Array<any>;
  // selectedUser: string;
  // selectedCurrentUser: string;
  // selectedfbUser: string;
  fbUsers:any;

  constructor(private userService: UserService) {
    this.users = [
      {id:'user1', name: 'Guruvardhanarao'},
      {id:'user2', name: 'Veeru'},
      {id:'user3', name: 'Chiru'},
      {id:'user4', name: 'Mahesh'}
    ];
    localStorage.setItem('currentUser', JSON.stringify([
      { token: 'token1', name: 'Ganesh' },
      { token: 'token2', name: 'Ramu' },
      { token: 'token3', name: 'Arjun' }
      ]
      ));

     this.userService.getUsers().subscribe(users => {
       this.fbUsers = users;
       console.log(this.fbUsers);
     });
  }

  
   currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
}
