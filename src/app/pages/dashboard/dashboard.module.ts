import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MyMaterialModule } from '@shared/my-material.module';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
