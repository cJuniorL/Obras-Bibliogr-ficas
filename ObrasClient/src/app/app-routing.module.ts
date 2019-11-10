import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'formatacao', pathMatch: 'full' },
  { path: 'formatacao', loadChildren: () => import('./modules/formatacao-nome/formatacao-nome.module').then( m => m.FormatacaoNomeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
