import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TaxComponent } from './tax/tax.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { ExpendituresComponent } from './expenditures/expenditures.component';
import { GroupComponent } from './group/group.component';
import { AddExpenditureComponent } from './group/add-expenditure/add-expenditure.component';




const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tax', component: TaxComponent },
  { path: 'createGroup', component: CreateGroupComponent },
  { path: 'group', component: GroupComponent, children: [
    { path: ':id', component:  ExpendituresComponent},
    { path: ':id/expenditure', component:  AddExpenditureComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
