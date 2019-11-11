import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NomeFormatacao } from '../shared/models/NomeFormatacao';

@Injectable({
  providedIn: 'root'
})
export class FormataNomeService {

  private url : string = "https://localhost:44370/api/";  

  constructor(private httpClient : HttpClient) { }

  Formatar(nomesFormatacao: NomeFormatacao[]) : Observable<any>{

      return this.httpClient.post(this.url + 'FormataNome', nomesFormatacao);
  }
}