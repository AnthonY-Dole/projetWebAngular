import { Injectable } from '@angular/core';
import { BoutiqueComponent } from './boutique/boutique.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public boutiques: BoutiqueComponent;
  get(){
    this.boutiques.products();
    this.boutiques.total;

  }
  constructor() { }
}

