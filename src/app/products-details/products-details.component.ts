import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Products } from '../interface/products';
import { ProductsService } from '../service/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'app-products-details',
    templateUrl: './products-details.component.html',
    styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
    constructor(
        private productsService: ProductsService,
        private router: ActivatedRoute
    ) {}

    id!: number;
    sub!: Subscription;
    arrayProducts!: Products;

    ngOnInit(): void {
        this.sub = this.router.params.subscribe((params: Params) => {
            this.id = +params['id'];
            console.log(this.id);
            this.productsService.getProduct(this.id).subscribe((products) => {
                this.arrayProducts = products;
                console.log(products);
            });
        });
    }

    addToCart() {
        this.sub = this.router.params.subscribe((params: Params) => {
            this.id = +params['id'];
            console.log(this.id);
            this.productsService.getProduct(this.id).subscribe((products) => {
                this.arrayProducts = products;
                this.productsService.cart.push(products);
                this.productsService.counter();
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe;
    }
}
