import { Component, OnInit } from '@angular/core';
import {HtppService} from './services/http-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public location = '';

  constructor(private httpService:HtppService){

  }
  ngOnInit(){
  }
  getLocationData(){
    if(this.location){
      this.httpService.getLocationData(this.location).subscribe(resp=>{
        console.log(resp);
      })
    }
  }
}
