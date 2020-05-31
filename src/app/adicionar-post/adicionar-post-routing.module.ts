import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarPostPage } from './adicionar-post.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarPostPageRoutingModule {}
