import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import necessário para usar [(ngModel)]
import { AppComponent } from './app.component';
import { LoginComponent } from './Page/login/login.component'; // Import do componente de login
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, // Necessário para rodar o Angular no navegador
    FormsModule, // Necessário para trabalhar com formulários e [(ngModel)]
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent], // Componente raiz do aplicativo
})
export class AppModule {}
