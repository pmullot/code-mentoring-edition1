import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';

const modules = [CoreModule];
const declarations: [] = [];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...declarations],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}
