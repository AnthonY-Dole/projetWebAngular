import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { CommanderComponent } from './commander/commander.component';

const routes: Routes = [ 
  { path: 'boutique', component: BoutiqueComponent },
  { path: 'index', component: IndexComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'commander', component: CommanderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
