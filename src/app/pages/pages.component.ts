import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleSideNav(sideNav: MatSidenav) {
    sideNav.toggle().then((result: any) => {
      console.log(result);
      console.log(`選單狀態：${result.type}`);
    });
  }

  opened() {
    console.log('芝麻開門');
  }

  closed() {
    console.log('芝麻關門');
  }
}
