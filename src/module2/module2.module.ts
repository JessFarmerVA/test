import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from './comp2/comp2.component';
import { Module2RoutingModule } from './module2-routing.module';



@NgModule({
  declarations: [Comp2Component],
  imports: [
  CommonModule,
  Module2RoutingModule
  ]
})
export class Module2Module { }
