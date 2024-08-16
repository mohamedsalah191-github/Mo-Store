import { RouterOutlet } from '@angular/router';
import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgStyle } from '@angular/common';
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
  selector: 'app-home',
  standalone: true,
  imports: [ FormsModule ,NgFor ,NgClass, NgStyle ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  products:myproduct[] = [];
  constructor(private _ProductService:ProductService) {

  }
  ngOnInit(): void {
    this._ProductService.getProduct().subscribe({
      next:(res)=> {
        this.products = res;
      }
    })
  }
  }
