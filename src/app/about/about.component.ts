
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../product.service';



interface myproduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

 interface Rating {
  rate: number
  count: number
}




@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
 

  products:myproduct[] = [];
  
  constructor( private _ProductService:ProductService) {

   
  }
  ngOnInit(): void {
   this._ProductService.getProduct().subscribe({
    next: (res)=> {
   this.products = res;
 
    }
   })
  }
}
