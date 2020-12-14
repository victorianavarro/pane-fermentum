import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    let url_paras = new URLSearchParams(window.location.search); // todo: is there a better way?
    let token = url_paras.get("token");
    let valid = 1; // todo: load data to validate token
    localStorage.setItem("session", JSON.stringify({ token: token }));
    if (valid) {
      this.router.navigate(["order"], { relativeTo: this.route, queryParams: { "token" : token} });
    } else {
      this.router.navigate(["deny"], { relativeTo: this.route});
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
