import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const modules: [] = [];
const declarations: [] = [];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...declarations],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}
