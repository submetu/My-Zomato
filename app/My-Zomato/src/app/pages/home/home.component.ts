import { Component, OnInit, OnInit} from '@angular/core';
import {HtppService} from '../../services/http-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchedLocation = '';
  public searchResults;
  public formSubmittedOnce = false;
  public loading = false;
  public lastSearchedKey = 'last-searched';
  constructor(private httpService:HtppService) { }

  
  ngOnInit(){
    let lastSearchedLocation = localStorage.getItem('last-searched');
    if(lastSearchedLocation){
      this.searchedLocation = lastSearchedLocation;
    }
  }
  getLocationData(){
    if(this.searchedLocation){
      this.loading = true;
      this.httpService.getLocationData(this.searchedLocation).subscribe(resp=>{
        this.formSubmittedOnce = true;
        this.loading = false;
        this.searchResults = resp['length'] > 0 ? resp : null;
        localStorage.setItem(this.lastSearchedKey, this.searchedLocation);
      })
    }
  }

}
