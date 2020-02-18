import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor( private http: HttpClient) { }
  apiURL = 'http://dam.tokidev.fr';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getPhotos() {
    return this.http.get('http://dam.tokidev.fr/products');
  }
}
