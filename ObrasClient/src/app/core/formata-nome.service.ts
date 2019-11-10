import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormataNomeService {

  private endUrl: string = "EstadoCivil";
  

  constructor(private httpClient : HttpClient) { }

  getNomeFormatado() : Observable<any>{
      environment.apiUrl;
      return this.httpClient.post(environment.apiUrl + '/formatar', {});
  }
}