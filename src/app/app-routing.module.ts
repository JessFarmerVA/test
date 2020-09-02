import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';

const routes: Routes = [
  {
    path: 'module1',
    loadChildren: () => import('./../module1/module1.module').then(
      (m) => m.Module1Module
    )
  },
  {
    path: 'module2',
    loadChildren: () => import('./../module2/module2.module').then(
      (m) => m.Module2Module
    )
  },
  {
    path: 'component3',
    component: Component3Component
  },
  {
    path: 'component4',
    component: Component4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
