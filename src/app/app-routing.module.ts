import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandidateComponent } from './candidate/candidate.component';

import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path:'candidate', component:CandidateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
