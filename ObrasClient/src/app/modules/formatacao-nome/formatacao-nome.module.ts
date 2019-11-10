import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormatacaoNomeRoutingModule } from './formatacao-nome-routing.module';
import { FormatacaoNomeComponent } from './formatacao-nome/formatacao-nome.component';

@NgModule({
  declarations: [FormatacaoNomeComponent],
  imports: [
    CommonModule,
    FormatacaoNomeRoutingModule,
    FormsModule
  ]
})
export class FormatacaoNomeModule { }
