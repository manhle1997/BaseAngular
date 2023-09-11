import { Component } from '@angular/core';
import { NotifyService } from './_core/services/notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private noti: NotifyService){
    this.noti = noti;
  }
  title = 'BaseAngular';
  public getmessage() : void{
    this.noti.showNotification('default', 'Good evening, you lovely person!')
  }
}
