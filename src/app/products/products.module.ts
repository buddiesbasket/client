import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MensWearComponent } from './components/mens-wear/mens-wear.component';
import { WomenWearComponent } from './components/women-wear/women-wear.component';
import { KidsWearComponent } from './components/kids-wear/kids-wear.component';
import { ProductsUploadComponent } from './components/products-upload/products-upload.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';


@NgModule({
  declarations: [
    ProductsComponent,
    MensWearComponent,
    WomenWearComponent,
    KidsWearComponent,
    ProductsUploadComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers }),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductsModule { }
