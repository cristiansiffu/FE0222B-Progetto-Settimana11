import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    constructor(public productsService: ProductsService) {}

    ngOnInit(): void {}
}
