import { Injectable, Inject } from '@angular/core';
import { Products } from '../interface/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    fakeURL = 'http://localhost:4201';

    constructor(private http: HttpClient) {}

    public count: number = 0;
    public cart: Products[] = [];

    public get() {
        return this.http.get<Products[]>(this.fakeURL + '/products');
    }

    public getProduct(id: number) {
        return this.http.get<Products>(this.fakeURL + '/products' + '/' + id);
    }

    public getCart() {
        return this.cart;
    }

    public deleteProduct(product: Products) {
        const index = this.cart.indexOf(product, 0);
        if (index > -1) {
            this.cart.splice(index, 1);
        }
        this.count--;
        console.log(this.cart);
    }

    public emptyCart() {
        this.cart = [];
        this.count = 0;
        return this.cart;
    }

    public counter() {
        this.count++;
    }
}
