import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { AlertModule } from 'ngx-bootstrap/alert'
import { AccordionModule } from 'ngx-bootstrap/accordion'
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MomentModule } from 'ngx-moment'
import { reducers, metaReducers } from './reducers'
import { AppEffects } from './app.effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { ConnectWalletEffects } from './connect-wallet.effects'
import { FormsModule } from '@angular/forms'
import { ShortenPipe } from './pipes/shorten.pipe'
import { AmountConverterPipe } from './pipes/amount.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { DomainComponent } from './pages/domain/domain.component';
import { PagesformComponent } from './components/pagesform/pagesform.component'


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ShortenPipe,
    DashboardComponent,
    HomeComponent,
    DomainComponent,
    PagesformComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),

    MomentModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([AppEffects, ConnectWalletEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent, BsModalService]
})
export class AppModule { }
