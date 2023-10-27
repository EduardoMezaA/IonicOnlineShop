import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  favoriteItems: Product[];

  constructor(private cartService: CartService) {
    this.favoriteItems=this.cartService.getFavoriteItems();
    console.log('Productos favoritos:', this.favoriteItems); 
  }

  removeFromFavorites(product: Product) {
    this.cartService.removeFromFavorites(product);
  }

  addToCart(product: Product) {
    // Llama a la función del servicio para agregar el producto al carrito
    this.cartService.addToCart(product);
  }
  
}

