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
price:any = 0;
total:any = 0;

product(ref: any,prix:number){
  if (ref && prix) {
    this.products.push(ref,prix);
  }
  this.price = prix;
  this.total = this.total + this.price

  console.log(this.price);
}
delete(){
 this.products = [];
}
add(){
  this.products;
  console.log(this.products);
}
}