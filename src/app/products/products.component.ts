import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$ = [];

  constructor(private productService: ProductService, private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.productService.getAll()
      .snapshotChanges()
      .forEach(usersSnapshot => {
        usersSnapshot.forEach(userSnap => {
          const user = userSnap.payload.toJSON();
          user['$key'] = userSnap.key;
          this.products$.push(user);
        });
      });
    console.log(this.products$);
  }

  addToCart(product) {

  }

}
