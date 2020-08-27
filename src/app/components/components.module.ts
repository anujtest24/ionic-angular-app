import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StartComponent} from './start/start.component'
import {LogoComponent} from './logo/logo.component'
import {SlidesComponent} from './slides/slides.component'
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [StartComponent,LogoComponent,SlidesComponent],
  exports:[StartComponent,LogoComponent,SlidesComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ComponentsModule { }
