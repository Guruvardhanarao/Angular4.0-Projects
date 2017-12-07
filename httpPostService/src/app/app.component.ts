import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Http Post Service';
  tempObj: object = {};
  profileObj: any;

  constructor(private profileService: ProfileService) {}

  sendProfile(){
    this.profileService.saveProfile(this.tempObj).subscribe(res => this.profileObj = res);
  }

}
