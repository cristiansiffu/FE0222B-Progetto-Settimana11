import { Component, OnInit } from '@angular/core';
import { Products } from '../interface/products';
import { ProductsService } from '../service/products.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    constructor(private productsService: ProductsService) {}

    sub!: Subscription;
    products!: Products[];

    ngOnInit(): void {
        this.sub = this.productsService.get().subscribe((products) => {
            this.products = products;
            console.log(this.products);
        });
    }
}
