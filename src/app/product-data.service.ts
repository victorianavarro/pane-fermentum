import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductDataService {
  items = [];

  setItems(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  getItemsO(): Observable<Product[]> {
    return of(this.items);
  }
}
