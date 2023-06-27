import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Produto } from './models/produto';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = 'https://fakestoreapi.com'; // URL da API falsa
  

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getDados(): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/products`);
  }

  getProdutos(): Observable<Produto> {
    return this.http
      .get<Produto>(this.apiUrl + '/products/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
