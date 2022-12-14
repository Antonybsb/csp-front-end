import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClientesService } from './clientes.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
