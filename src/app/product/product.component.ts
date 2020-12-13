import { HttpClient } from "@angular/common/http";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    description: string
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

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({"name" : ''});
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.httpClient
      .get<any>(
        "https://13ncum1gg0.execute-api.eu-central-1.amazonaws.com/order?secret=123459"
      )
      .subscribe(
        success => {
          console.log(success);
          this.products = success;
          var x = { name: "" };
          for (var i = 0; i < this.products.length; i++) {
            x[this.products[i].id] = "0";
          }
          this.checkoutForm = this.formBuilder.group(x);
        },
        error => {
          console.log("error");
          console.log(error);
        }
      );
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.checkoutForm.reset();

    console.warn("Your order has been submitted", customerData);
  }
}
