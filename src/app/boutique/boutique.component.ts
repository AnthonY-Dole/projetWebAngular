import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  albums;
  constructor(private photosService: PhotoService,) { }

  ngOnInit(): void {
    this.albums = this.photosService.getPhotos();
  }
  
  products = [];
price:number;

product(ref: string,prix:number){
  if (ref && prix) {
    this.products.push(ref,prix);
  }
  this.price =  this.price + prix;
}
delete(){
 this.products.slice();
}
}