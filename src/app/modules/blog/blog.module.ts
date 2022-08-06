import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GridModule, CardModule, PaginationModule, TooltipModule, DropdownModule, BadgeModule, TableModule, ButtonModule, FormModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { SharedModule } from '../shared/shared.module';
import { NgxEditorModule } from 'ngx-editor';

const components = [
  PostListComponent,
  PostCreateComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxEditorModule,
    TooltipModule,
    DropdownModule,
    BadgeModule,
    TableModule,
    ButtonModule,
    IconModule,
    ReactiveFormsModule,
    FormModule,
    GridModule,
    PaginationModule,
    CardModule,
    SharedModule,
    BlogRoutingModule
  ],
  exports: [components]
})
export class BlogModule { }
