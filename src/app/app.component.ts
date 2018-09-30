import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-store';
  cart: Array<any>;

  constructor (private store: Store<any>) {}

  ngOnInit() {
    // Takes the cart item from the state, and sets it to the cart object in this component.
    this.store.select('cart').subscribe(state => this.cart = state);
  }
}
