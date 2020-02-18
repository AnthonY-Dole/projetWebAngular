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

}
