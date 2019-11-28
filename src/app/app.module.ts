import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateMixComponent } from './create-mix/create-mix.component';
import { RecalculationComponent } from './recalculation/recalculation.component';
import { DeflectionComponent } from './deflection/deflection.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import appMixingProgram from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    CreateMixComponent,
    RecalculationComponent,
    DeflectionComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appMixingProgram), 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
