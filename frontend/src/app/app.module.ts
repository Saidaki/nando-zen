import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustumerbookComponent } from './custumerbook/custumerbook.component';
import { ProfessionalbookComponent } from './professionalbook/professionalbook.component';
import { ApiserviceService } from './apiservice.service';

@NgModule({
  declarations: [
    AppComponent,
    CustumerbookComponent,
    ProfessionalbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [ApiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
