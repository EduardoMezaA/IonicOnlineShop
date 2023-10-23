import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  public products:Product[]=[];
  public productsFounds:Product[]=[];
  public filter=[
    "Abarrotes",
    "Frutas y verduras",
    "Limpieza",
    "Farmacia",
  ];

  public cartItems:Product[]=[];
  public quantity: number = 1;
  public totalCartPrice: number = 0; // Variable para el precio total del carrito
  
  constructor() {
    this.products.push({
      name:"Coca Cola",
      price:20,
      description:"Lorem ipsum",
      type:"Abarrotes",
      photo:"https://picsum.photos/500/300?random",
      quantity:0
    });
    this.products.push({
      name:"Aguacate hass",
      price:100,
      description:"Lorem ipsum",
      type:"Frutas y verduras",
      photo:"https://picsum.photos/500/300?random",
      quantity:0
    });
    this.products.push({
      name:"Diclofenaco",
      price:20,
      description:"Lorem ipsum",
      type:"Farmacia",
      photo:"https://picsum.photos/500/300?random",
      quantity:0
    });
    this.products.push({
      name:"Cloro",
      price:20,
      description:"Lorem ipsum",
      type:"Limpieza",
      photo:"https://picsum.photos/500/300?random",
      quantity:0
    });
    this.products.push({
      name:"Fabuloso",
      price:45,
      description:"85 el litro",
      type:"Limpieza",
      photo:"https://picsum.photos/500/300?random",
      quantity:0
    });
    this.products.push({
      name:"Paracetamol",
      price:34,
      description:"Generico",
      type:"Farmacia",
      photo:"https://picsum.photos/500/300?random",
      quantity:0
    });

    this.productsFounds=this.products;
  }
  public filterProducts():void{
    console.log(this.filter);
    this.productsFounds=this.products.filter((item)=>
    {
      return this.filter.includes(item.type);
    }
    );
  }
  // Calcula el total del carrito
calculateCartTotal(): number {
  let total = 0;
  for (const product of this.cartItems) {
    total += product.price * product.quantity;
  }
  return total;
}

  public cartProducts():void{
    console.log(this.cartItems);
  }
  
  addToCart(product: Product) {
    const existingProduct = this.cartItems.find((item) => item.name === product.name);
  
    if (existingProduct) {
      existingProduct.quantity += 1; // Incrementa la cantidad
    } else {
      product.quantity = 1; // Inicializa la cantidad en 1 para un nuevo producto
      this.cartItems.push(product);
    }
  
    // Calcula el precio total del carrito después de agregar un producto
    this.totalCartPrice = this.calculateCartTotal();
  }
  
  

  increaseQuantity() {
    this.quantity++;
  }
  
  removeFromCart(product: Product) {
    const index = this.cartItems.indexOf(product);
  
    if (index !== -1) {
      if (product.quantity > 1) {
        // Si la cantidad es mayor que 1, disminuye la cantidad en 1
        product.quantity -= 1;
      } else {
        // Si la cantidad es 1, elimina el producto del carrito
        this.cartItems.splice(index, 1);
      }
  
      // Calcula el precio total del carrito después de eliminar un producto
      this.totalCartPrice = this.calculateCartTotal();
    }
  }
  

  
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

}
