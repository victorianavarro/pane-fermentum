import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";

import { ProductComponent } from "./product/product.component";

import { HttpClientModule } from "@angular/common/http";
import { DenyPageComponent } from './deny-page/deny-page.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule, // marco
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        { path: "order", component: ProductComponent },
        { path: "deny", component: DenyPageComponent }
      ]
    ) // was prodcutlist
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductComponent,
    DenyPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
