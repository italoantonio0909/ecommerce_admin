import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { TableComponent } from './table/table.component';
import { TableModule } from '@coreui/angular';

const components = [LoaderComponent, TableComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [components]
})
export class SharedModule { }
