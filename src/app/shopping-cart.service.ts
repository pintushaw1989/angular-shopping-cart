import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private getCart(cartId: string) {
    return this.db.object('/shopping-cart' + cartId);
  }

  private async getOrCreateCartId() {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
      return cartId;
    }

    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  private create() {
    return this.db.list('/shopping-cart').push({
      dateCreated: new Date().getTime()
    });
  }

  async addToCart(product) {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.db.object('/shopping-cart' + cartId + '/items/' + product.$key);
    item$.valueChanges().subscribe(item => {
      if (item) {
        // item$.update({ quantity: item.quantity + 1 });
      } else {
        item$.set({ product: product, quantity: 1 });
      }
    });
  }
}
