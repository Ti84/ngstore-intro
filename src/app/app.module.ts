import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from "@ngrx/store";  
import { reducer } from './store/reducers/reducer';


const routes: Routes = [  
  {
      path: '',
      redirectTo: '/products',
      pathMatch: 'full'
  },
  {
      path: 'products',
      component: ProductsComponent
  },
  {
      path: 'cart',
      component: CartComponent
  },
  {
      path: 'product/:id',
      component: ProductComponent
  },
  {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // Eventually, change this to the way that Todd Motto did it.(forFeature allows it to be lazyLoaded!)
    // This doesn't take into account state slices. (Only one state item called cart atm).
    StoreModule.forRoot({cart: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
