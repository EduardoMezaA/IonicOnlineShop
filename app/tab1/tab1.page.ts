import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public products: Product[] = [] ;
  public productsFounds: Product[] = [];
  public filter = [
    "Abarrotes",
    "Frutas y Verduras",
    "Limpieza",
    "Farmacia",
  ];
  public quantity: number = 1;
  public cartItems: Product[] = [];

  
  constructor() {
    this.products.push({
      name: "Criko Cola",
      photo: "https://picsum.photos/200/300?random=",
      price: 20,
      type: "Abarrotes",
      description: "Bebida altamente azucarada que te va a matar de diabetes xd."
    },
    
    {
      name: "Pepino 🥵",
      photo: "https://picsum.photos/200/300?random=",
      price: 10,
      type: "Frutas y Verduras",
      description: "Del que comes."
    },

    {
      name: "Fabuloso",
      photo: "https://picsum.photos/200/300?random=",
      price: 100,
      type: "Limpieza",
      description: "Hace feliz a tu nariz xdxdxdxdxdxd."
    },

    {
      name: "Paracetamol",
      photo: "https://picsum.photos/200/300?random=",
      price: 100,
      type: "Farmacia",
      description: "Pal dolor de mollera."
    }
    
    );

    this.productsFounds = this.products;
  }

  public filterProducts():void{
    console.log(this.filter);
    this.productsFounds = this.products.filter(
      item => {
        return this.filter.includes(item.type);
      }
    );
  }

  public cartProducts():void{
    console.log(this.cartItems);
    
  }

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cartProducts();
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

}
