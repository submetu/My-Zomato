import { Component, OnInit} from '@angular/core';
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
  public mapShown = false;
  constructor(private httpService:HtppService) { }

  
  ngOnInit(){
    let lastSearchedLocation = localStorage.getItem('last-searched');
    if(lastSearchedLocation){
      this.searchedLocation = lastSearchedLocation;
      this.getLocationData();
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
