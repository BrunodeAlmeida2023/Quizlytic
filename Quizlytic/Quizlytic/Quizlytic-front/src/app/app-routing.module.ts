import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Page/login/login.component'; // Substitua pelo nome correto do componente

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redireciona para a tela de login
  { path: 'login', component: LoginComponent }, // Rota para o componente de login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuração principal das rotas
  exports: [RouterModule], // Exporta o RouterModule para uso em outros módulos
})
export class AppRoutingModule {}
