import { Component, OnInit } from '@angular/core';
import {HtppService} from '../../services/http-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public location;
  constructor(private httpService:HtppService) { }

  ngOnInit() {
  }
  getLocationData(){
    if(this.location){
      this.httpService.getLocationData(this.location).subscribe(resp=>{
        console.log(resp);
      })
    }
  }

}
