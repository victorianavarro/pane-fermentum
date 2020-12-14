import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ProductDataService } from './product-data.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit{
  constructor(
    private httpClient: HttpClient, 
    private route: ActivatedRoute, 
    private router: Router,
    private productDataService: ProductDataService) 
    {}

  ngOnInit() {
    let url_paras = new URLSearchParams(window.location.search); // todo: is there a better way?
    let token = url_paras.get("token");

    const promise = this.httpClient.get("https://13ncum1gg0.execute-api.eu-central-1.amazonaws.com/order?secret=".concat(token)).toPromise();

    promise.then((data)=>{
      localStorage.setItem("session", JSON.stringify({ token: token }));
      this.router.navigate(["order"], { relativeTo: this.route, queryParams: { "token" : token} });
      this.productDataService.setItems(data);
    }).catch((error)=>{
      this.router.navigate(["deny"], { relativeTo: this.route});
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
