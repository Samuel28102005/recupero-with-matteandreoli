import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal, Root } from './search_module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
prodotto!:string
obsprod !: Observable <Root>
ris:Meal[] = []

constructor(public http : HttpClient){

}

search(prodotto:HTMLInputElement){
this.prodotto=prodotto.value
this.obsprod = this.http.get<Root>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.prodotto}`)
this.obsprod.subscribe((data:Root)=>{this.ris= data.meals})

}
}
