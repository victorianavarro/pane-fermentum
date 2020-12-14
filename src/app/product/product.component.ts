import { HttpClient } from "@angular/common/http";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { BigNumber } from "bignumber.js";
import { ProductDataService } from '../product-data.service';

export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description: string
  ) {}
}

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  products: Product[];
  checkoutForm;
  price_dict;
  token;
  total_to_pay = 0;

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private productDataService: ProductDataService
  ) {
    this.checkoutForm = this.formBuilder.group({ name: "" });
  }

  ngOnInit() {
    let session = JSON.parse(localStorage.getItem('session')); //todo: read from url 
    this.token = session.token;
    this.price_dict = {}
    this.getProducts();
  }

  getProducts() {
    this.products = this.productDataService.getItems();
    console.log(this.productDataService.getItems()); // why empty?
    let group = { name: "" };
    for (var i = 0; i < this.products.length; i++) {
      group[this.products[i].id] = "0";
      this.price_dict[this.products[i].id] = this.products[i].price
    }
    this.checkoutForm = this.formBuilder.group(group);
    /*this.httpClient
      .get<any>(
        "https://13ncum1gg0.execute-api.eu-central-1.amazonaws.com/order?secret=".concat(this.token)
      )
      .subscribe(
        success => {
          console.log(success);
          this.products = success;  
          var x = { name: "" };
          for (var i = 0; i < this.products.length; i++) {
            x[this.products[i].id] = "0";
            this.price_dict[this.products[i].id] = this.products[i].price
          }
          this.checkoutForm = this.formBuilder.group(x);
        },
        error => {
          console.log("error");
          console.log(error);
        }
      );
      */
  }

  onChangeEvent(event: any) {
    //console.log(event.target.value);
    // GET ALL THE INPUT ELEMENTS.
    let ele = document.getElementsByClassName('amount');
    let element_id;
    let quantity: BigNumber;
    let price: BigNumber;
    let to_pay = new BigNumber(0);

    for (var i = 0; i < ele.length; i++) {
      element_id = ele[i].id;
      quantity = new BigNumber(ele[i].value);
      price=new BigNumber(this.price_dict[element_id]);
      to_pay = to_pay.plus(quantity.multipliedBy(price));
    }

    this.total_to_pay = to_pay.toFixed(2);
  }


  onSubmit(customerData) {
    // Process checkout data here
    //this.checkoutForm.reset();
    console.warn("Your order has been submitted", customerData);
  }
}
