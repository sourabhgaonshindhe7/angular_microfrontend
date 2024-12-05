import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { FormsModule } from '@angular/forms';
import { BillingComponent } from './billing/billing.component';


@NgModule({
  declarations: [BillingComponent],
  imports: [
    CommonModule,
    BillingRoutingModule,
    FormsModule
  ],
   exports: [BillingComponent]
})
export class BillingModule { }
