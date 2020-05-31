import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarPostPageRoutingModule } from './adicionar-post-routing.module';

import { AdicionarPostPage } from './adicionar-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarPostPageRoutingModule
  ],
  declarations: [AdicionarPostPage]
})
export class AdicionarPostPageModule {}
