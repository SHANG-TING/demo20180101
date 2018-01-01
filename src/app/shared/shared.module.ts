import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MyMaterialModule } from './my-material.module';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [],
  exports: [FlexLayoutModule, MyMaterialModule]
})
export class SharedModule {}
