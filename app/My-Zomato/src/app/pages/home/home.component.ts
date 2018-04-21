import { Component, OnInit } from '@angular/core';
import {HtppService} from '../../services/http-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchedLocation;
  public searchResults;
  constructor(private httpService:HtppService) { }

  ngOnInit() {
  }
  getLocationData(){
    if(this.searchedLocation){
      this.httpService.getLocationData(this.searchedLocation).subscribe(resp=>{
        console.log(resp);
        this.searchResults = resp;
      })
    }
  }

}
