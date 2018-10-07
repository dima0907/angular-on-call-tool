import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '/contact-us', component: ContactUsComponent },
];

@NgModule({
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
