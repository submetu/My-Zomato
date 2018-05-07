import { Component, OnInit} from '@angular/core';
import {HtppService} from '../../services/http-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public lastSearchedKey = 'last-searched';
  public allSearchesKey = 'all-searches'
  public maxSearchEntities = 10;

  public previousSearches = [];
  public searchedLocation = '';
  public searchResults;
  public formSubmittedOnce = false;
  public loading = false;
  public mapShown = false;
  constructor(private httpService:HtppService) { }

  
  ngOnInit(){
    this.previousSearches = JSON.parse( localStorage.getItem(this.allSearchesKey) || '[]') || [];
    let lastSearchedLocation = localStorage.getItem('last-searched');
    if(lastSearchedLocation){
      this.searchedLocation = lastSearchedLocation;
      this.getLocationData();
    }
  }
  getLocationData(){
    if(this.searchedLocation){
      this.loading = true;
      this.httpService.getLocationData(this.searchedLocation).subscribe((resp)=>{
        this.formSubmittedOnce = true;
        this.loading = false;
        
        this.searchResults = resp['length'] > 0 ? resp : null;
        if(this.searchResults){
          this.saveToAllSearches(this.searchResults);
        }
        localStorage.setItem(this.lastSearchedKey, this.searchedLocation);
      })
    }
  }
  saveToAllSearches(searchResults){
    let previousSearches = JSON.parse( localStorage.getItem(this.allSearchesKey) || '[]') || [];

    searchResults.map( result =>{
      var match = previousSearches.filter( previous =>{
        return previous.entity_id === result.entity_id
      });
      if(match.length === 0){
        previousSearches.unshift(result)
      }
    });
    
    if(previousSearches.length >= this.maxSearchEntities){
      previousSearches.length = this.maxSearchEntities;
    }

    localStorage.setItem(this.allSearchesKey, JSON.stringify(previousSearches));
    this.previousSearches = previousSearches;
  }


}
