import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router) 
    {}

  ngOnInit() {
    let valid = 0;
    var target;
    this.route.queryParams.subscribe(params => {
      console.log(params['token']);
      let token = params['token'];
      localStorage.setItem('session', JSON.stringify({ token: token }));
      if (valid){
        target = 'order'
      }else{
        target = 'deny'
      }
    });
    //this.router.navigate([target], { relativeTo: this.route });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
