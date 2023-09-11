import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';


@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private notifier: NotifierService) { 
  }
  public showNotification( type: string, message: string ): void {
    console.log("aâ")
		this.notifier.notify( type, message );
	}

}
