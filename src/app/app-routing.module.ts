import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddContactComponent } from './components/schedule/add-contact/add-contact.component';
import { ListContactsComponent } from './components/schedule/list-contacts/list-contacts.component';

const routes: Routes = [

   {path: 'add-contact', component: AddContactComponent},
   {path: 'list-contact', component: ListContactsComponent},
   {path: '**', pathMatch: 'full', redirectTo: 'list-contact'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
