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
    let valid = 1;
    let target;
    let url_paras = new URLSearchParams(window.location.search);
    let token = url_paras.get("token");
    localStorage.setItem("session", JSON.stringify({ token: token }));
    if (valid) {
      target = "order";
    } else {
      target = "deny";
    }
    this.router.navigate([target], { relativeTo: this.route });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
