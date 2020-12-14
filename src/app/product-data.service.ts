import { Injectable } from "@angular/core";

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
}
