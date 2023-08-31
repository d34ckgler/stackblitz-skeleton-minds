import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderBannerComponent } from './slider-banner/slider-banner.component';
import { SkeletonProductBrandComponent } from './skeleton-product-brand/skeleton-product-brand.component';

@NgModule({
  imports: [CommonModule],
  exports: [SliderBannerComponent, SkeletonProductBrandComponent],
  declarations: [SliderBannerComponent, SkeletonProductBrandComponent],
})
export class ComponentsModule {}
