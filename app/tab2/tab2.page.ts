import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public cartItems: Product[];
  public quantity: number = 1;
  public totalCartPrice: number = 0; // Variable para el precio total del carrito

  constructor(private cartService: CartService, public alertController: AlertController) {
    this.cartItems = this.cartService.getCartItems();
  }

  isCartEmpty(): boolean {
    return this.cartService.isEmpty();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  calculateCartTotal(): number {
    return this.cartService.calculateCartTotal();
  }

  clearCart() {
    this.presentAlert();
    this.cartItems = this.cartService.clearCart();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Atención!',
      message: 'Usted ha comprado los productos exitosamente',
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
