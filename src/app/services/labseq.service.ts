import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LabSeqService {

  constructor(private http: HttpClient) { }

  public getValueFromSequence(index: number) : Observable<number> {
    let url = environment.getValueFromSequenceURL + index;
    return this.http.get<number>(url).pipe(
      catchError(() => {
        throw new Error('Erro na API. Verifique a API.');
      })
    );
  }
}
