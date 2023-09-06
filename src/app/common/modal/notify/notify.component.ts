import { Component } from '@angular/core';
import { NotifierService, NotifierContainerComponent } from 'angular-notifier'; 
@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent {
  private readonly notify : NotifierService;
  constructor(notifierService: NotifierService){
    this.notify = notifierService
  }
  public showNotification( type: string, message: string ): void {
		this.notify.notify( type, message );
	}
}
