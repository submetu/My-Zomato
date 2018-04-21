import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HtppService {
  constructor(private http: HttpClient) { 
   
  }

  getLocationData(location) {
    return this.http.post('http://localhost:4002/location',{location});
  }

}