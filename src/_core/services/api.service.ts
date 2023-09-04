import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { MethodApiType } from '../enums/methodapi.type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) {

  }
  protected async ToApi(url: string, type: MethodApiType = MethodApiType.Get, params: any = null): Promise{

  }

}
