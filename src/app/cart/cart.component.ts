import { Component, OnInit } from '@angular/core';
import { Products } from '../interface/products';
import { ProductsService } from '../service/products.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  constructor(private productsService: ProductsService, private formBuilder: FormBuilder) {}

  form!: FormGroup;

  subPrices!: Subscription;
  cart!: Products[];

  ngOnInit(): void {
    this.cart = this.productsService.getCart();
    console.log(this.cart);
    if (this.cart.length > 0) {
      this.form = this.formBuilder.group({
        userInfo: this.formBuilder.group({
          name: this.formBuilder.control(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
          password: this.formBuilder.control(null, [
            Validators.required,
            Validators.pattern('[a-zA-Z0-9 ]*')
          ]),
          address: this.formBuilder.control(null, [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]),
        })
      });
    }

  }

  // Take the inputs values to solve the payment and clear the form

  completeOrder() {
    console.log('Your order has been placed.', this.form.value);
    console.log(this.cart);
    this.productsService.emptyCart();
    this.cart = this.productsService.getCart();
    this.form.reset();
  }

  // Remove an item from cart

  delete(product: Products) {
    return this.productsService.deleteProduct(product);
  }

  // Form Controls

  getNameErrors(name: string, error: string) {
    return this.form.get(name)?.errors![error]
  }

  getPasswordErrors(password: string, error: string) {
    return this.form.get(password)?.errors![error]
  }

  getAddressErrors(address: string, error: string) {
    return this.form.get(address)?.errors![error]
  }

  checkName(name: string) {
    return this.form.get(name);
  }

  checkPassword(password: string) {
    return this.form.get(password);
  }

  checkAddress(address: string) {
    return this.form.get(address);
  }
}
