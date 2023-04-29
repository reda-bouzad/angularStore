import { Component } from '@angular/core';
import {products} from "../../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  developper:string = "Reda";
  flag: boolean = false;
  products = products;
  updateDevelopper() {
    if (this.developper == "Reda") {
      this.developper = "Adnan"
    } else {
      this.developper = "Reda";
    }
  }
  share(){
    alert("thank you for sharing the product")
  }
}
