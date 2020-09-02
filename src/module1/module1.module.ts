import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Module1RoutingModule } from './comp1/module1-routing.module';



@NgModule({
  declarations: [Comp1Component],
  imports: [
  CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
