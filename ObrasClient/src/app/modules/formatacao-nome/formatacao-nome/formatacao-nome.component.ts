import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { NomeFormatacao } from 'src/app/shared/models/NomeFormatacao';
import { FormataNomeService } from 'src/app/core/formata-nome.service';

@Component({
  selector: 'app-formatacao-nome',
  templateUrl: './formatacao-nome.component.html',
  styleUrls: ['./formatacao-nome.component.sass']
})
export class FormatacaoNomeComponent implements OnInit {

  quantidadeNome : number;
  nomesFormatacao : NomeFormatacao[] = [];
  resultadosFormatacao : NomeFormatacao[] = [];

  constructor(private formataNomeService : FormataNomeService) {
  }

  ngOnInit() {
  }

  btnConfirmarQuantidade_Click(){
    this.nomesFormatacao = [];
    this.resultadosFormatacao = [];
    for (let i = 0; i < this.quantidadeNome; i++){
      this.nomesFormatacao.push(new NomeFormatacao());
    }
  }

  btnFormatarNomes_Click(){
    this.formataNomeService.Formatar(this.nomesFormatacao).subscribe((data : NomeFormatacao[]) => {
      this.resultadosFormatacao = data;
    }, (error) => {
      alert("Um erro ocorreu!")
    });
  }

}
