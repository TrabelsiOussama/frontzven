import { Component, OnInit } from '@angular/core';
import { ProductModelServer } from '../_models/products';
import { ProductsService } from '../_services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  meals?: ProductModelServer[];
  currentmeal: ProductModelServer ;
  currentIndex = -1;
  sTitle = '';

  constructor(private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.retrievemeals();
    this.ProductsService.getMeals().subscribe(
      (data:ProductModelServer[])=>this.meals=data
    );
  }

  retrievemeals(): void {
    this.ProductsService.getAll().subscribe(data => {this.meals = data;console.log(data);},
        error => {console.log(error);});

  }
  refreshList(): void {
    this.retrievemeals();
    this.currentmeal ;
    this.currentIndex = -1;
  }
  setActivemeal(meal: ProductModelServer, index: number): void {
    this.currentmeal = meal;
    this.currentIndex = index;
  }
  removeAllmeals(): void {
    this.ProductsService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
  searchTitle(): void {
    this.currentmeal ;
    this.currentIndex = -1;
    this.ProductsService.findByTitle(this.sTitle)
      .subscribe(
        data => {
          this.meals = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
