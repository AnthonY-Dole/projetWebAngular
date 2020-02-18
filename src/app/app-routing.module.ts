import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [ { path: 'boutique', component: BoutiqueComponent },
{ path: 'index', component: IndexComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
