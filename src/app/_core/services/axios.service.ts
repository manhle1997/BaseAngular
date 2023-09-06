import { Injectable } from '@angular/core';
import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AxiosService {
  private axiosInstance = axios.create({
    baseURL: "https://localhost:5200",
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  constructor() { }
  public get<T>(url:string, config?:AxiosRequestConfig ) : Observable<AxiosResponse>
  {
    return new Observable((o) => {
      this.axiosInstance
      .get<T>(url, config)
      .then((res) => {
        o.next(res);
        o.complete();
      })
      .catch((error) => {
        o.error(error);
      });
    })
  }
  public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return new Observable((observer) => {
      this.axiosInstance
        .post<T>(url, data, config)
        .then((response) => {
          observer.next(response);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
