import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { ToastController } from '@ionic/angular';

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

  
  
  constructor(private cartService: CartService, public toastController: ToastController) {
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
    this.presentToast("Se agrego exitosamente al carrito");
  }



    // Define una función para mostrar un "toast"
    async presentToast(message: string) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000, // Duración en milisegundos
        position: 'bottom', // Posición del toast (puedes cambiarla)
      });
      toast.present();
    }
  

  addTofavorite(product:Product){
    this.cartService.addToFavorites(product);
    this.presentToast2("Se añadio a favoritos");
  }

  async presentToast2(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duración en milisegundos
      position: 'bottom', // Posición del toast (puedes cambiarla)
    });
    toast.present();
  }

}