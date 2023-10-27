// cart.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
  })
  export class CartService {
    public cartItems:Product[]=[];
    public favoriteItems:Product[]=[];
    public quantity: number = 1;
    public totalCartPrice: number = 0; // Variable para el precio total del carrito

    isEmpty(): boolean {
      return this.cartItems.length === 0;
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

    calculateCartTotal(): number {
        let total = 0;
        for (const product of this.cartItems) {
          total += product.price * product.quantity;
        }
        return total;
    }
  
    getCartItems() {
      return this.cartItems;
    }

    clearCart() {
      this.cartItems = [];
      return this.cartItems;
    }

    addToFavorites(product: Product) {
      const existingProduct = this.favoriteItems.find((item) => item.name === product.name);
  
      if (!existingProduct) {
        this.favoriteItems.push(product);
        console.log('Producto agregado a favoritos:', product);
      }
    }

    getFavoriteItems() {
      return this.favoriteItems;
    }

    removeFromFavorites(product: Product) {
      const index = this.favoriteItems.indexOf(product);
      if (index !== -1) {
        this.favoriteItems.splice(index, 1);
      }
    }
    
    

  }
