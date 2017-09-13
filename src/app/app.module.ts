import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TaxComponent } from './tax/tax.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { CurrencyDirective } from './shared/directives/currency.directive';
import { ViewMemberListComponent } from './create-group/view-member-list/view-member-list.component';
import { GroupListService } from './create-group/group-list.service';
import { ExpendituresComponent } from './expenditures/expenditures.component';
import { GroupComponent } from './group/group.component';
import { AddExpenditureComponent } from './group/add-expenditure/add-expenditure.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TaxComponent,
    CreateGroupComponent,
    CurrencyDirective,
    ViewMemberListComponent,
    ExpendituresComponent,
    GroupComponent,
    AddExpenditureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CurrencyMaskModule
  ],
  providers: [GroupListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
