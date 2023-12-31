import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { FormsModule } from '@angular/forms';
import { SelectionCheckboxComponent } from 'src/app/custom-components/selection-checkbox/selection-checkbox.component';
import { CategoryFilterComponent } from 'src/app/custom-components/category-filter/category-filter.component';
import { SearchComponent } from 'src/app/custom-components/search/search.component';
import { AutoCloseDirective } from 'src/app/modules/shared-module/directives/autoclose.directive';
import { HttpClientModule } from '@angular/common/http';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    ProductsComponent,
    SelectionCheckboxComponent,
    CategoryFilterComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModuleModule,
  ],
})
export class ProductsModule {}
