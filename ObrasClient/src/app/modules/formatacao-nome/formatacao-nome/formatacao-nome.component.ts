import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { NomeFormatacao } from 'src/app/shared/models/NomeFormatacao';

@Component({
  selector: 'app-formatacao-nome',
  templateUrl: './formatacao-nome.component.html',
  styleUrls: ['./formatacao-nome.component.sass']
})
export class FormatacaoNomeComponent implements OnInit {

  quantidadeNome : number;
  nomesFormatacao : NomeFormatacao[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  btnConfirmarQuantidade_Click(){
    this.nomesFormatacao = [];
    for (let i = 0; i < this.quantidadeNome; i++){
      this.nomesFormatacao.push(new NomeFormatacao());
    }
  }

  btnFormatarNomes_Click(){
    console.log(this.nomesFormatacao);
  }

}
