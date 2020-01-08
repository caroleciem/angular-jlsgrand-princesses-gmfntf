import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PrincessService } from './princess.service';
import { PrincessListComponent } from './princess-list/princess-list.component';
import { PrincessDetailsComponent } from './princess-details/princess-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([
    { path: '', component: PrincessListComponent },
    { path: 'details/:princessId', component: PrincessDetailsComponent }
  ]) ],
  declarations: [ AppComponent, TopBarComponent, PrincessListComponent, PrincessDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PrincessService]
})
export class AppModule { }
