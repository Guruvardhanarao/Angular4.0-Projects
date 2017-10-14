import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profileTitle: string = 'My Profile';

  profileObj: any[] = [
    {name: "Guruvardhanarao", fatherName: "Narasimharao", sex: "M", age: 27, education:"MCA", profilePic:'https://cdn.pastemagazine.com/www/blogs/lists/2010/05/12/phineas.jpg'}
  ]
}
