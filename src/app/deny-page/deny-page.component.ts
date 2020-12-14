import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deny-page',
  templateUrl: './deny-page.component.html',
  styleUrls: ['./deny-page.component.css']
})
export class DenyPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let session = JSON.parse(localStorage.getItem('session'));
    let token = session.token; // your token
    console.log("token")
    console.log(token)
  }

}