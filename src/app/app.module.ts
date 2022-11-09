import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule} from '@angular/material/input';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu'

import { DefaulLayoutComponent } from './layout/defaul-layout/defaul-layout.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaulLayoutComponent,
    ClientLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
