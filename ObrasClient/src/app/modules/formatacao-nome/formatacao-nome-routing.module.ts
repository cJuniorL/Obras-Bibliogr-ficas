import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormatacaoNomeComponent } from './formatacao-nome/formatacao-nome.component';

const routes: Routes = [
  {path: '', component: FormatacaoNomeComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormatacaoNomeRoutingModule { }
