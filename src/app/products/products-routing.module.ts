import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { MensWearComponent } from './components/mens-wear/mens-wear.component';
import { WomenWearComponent } from './components/women-wear/women-wear.component';
import { KidsWearComponent } from './components/kids-wear/kids-wear.component';
import { ProductsUploadComponent } from './components/products-upload/products-upload.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'men', component: MensWearComponent },
  { path: 'women', component: WomenWearComponent },
  { path: 'kids', component: KidsWearComponent },
  { path: 'upload', component: ProductsUploadComponent },
  { path: 'details', component: ProductsDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
