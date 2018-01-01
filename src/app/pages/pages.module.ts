import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { DashboardModule } from './dashboard/dashboard.module';

import { PagesComponent } from './pages.component';
import { SharedModule } from '@shared/shared.module';
import { TestComponent } from './test/test.component';


@NgModule({
  imports: [
    // 切換成英文狀態ctrl+shift然後ctrl+.
    SharedModule,
    PagesRoutingModule,
    DashboardModule
  ],
  declarations: [
    TestComponent,
    PagesComponent
  ]
})
export class PagesModule { }
