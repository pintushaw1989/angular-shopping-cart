import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;

  constructor(private categoryService: CategoryService, private productservice: ProductService, private router: Router) {
    this.categories$ = categoryService.getCategory();
    console.log(this.categories$);
  }

  ngOnInit() {
  }

  save(product) {
    console.log(product);
    this.productservice.create(product);
    this.router.navigate(['/admin/products']);
  }

}
