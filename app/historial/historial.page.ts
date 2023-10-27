import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Buy } from '../models/buy.model';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  public buyszaza:Buy[]=[];

  constructor(private cartService: CartService) { 
    this.buyszaza = this.cartService.getBuys();
    console.log(this.buyszaza);
  }

  ngOnInit() {
  }



}
