import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { AlertController } from '@ionic/angular';

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

  
  
  constructor(private cartService: CartService, public alertController: AlertController) {
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


  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Estimado cliente',
      message: 'Usted ha agregado el producto a su carrito de compras',
      buttons: ['OK']
    });
  
    await alert.present();
  }


}
