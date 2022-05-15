import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
    },
    {
        path: 'products-details/:id',
        component: ProductsDetailsComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    }, // redirect to ProductsComponent
    {
        path: '**',
        component: PageNotFoundComponent,
    }, // Route for a 404 page
];

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        CartComponent,
        NavbarComponent,
        PageNotFoundComponent,
        ProductsDetailsComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
