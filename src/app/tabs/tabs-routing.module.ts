import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'cadastroUsuario',
    loadChildren: () => import('../cadastro-usuario/cadastro-usuario.module').then(m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'meuspets',
    loadChildren: () => import('../meus-pets/meus-pets-routing.module').then(m => m.MeusPetsPageRoutingModule)
  },
  {
    path: 'minhasConsultas',
    loadChildren: () => import('../minhas-consultas/minhas-consultas.module').then(m => m.MinhasConsultasPageModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class TabsPageRoutingModule {}
