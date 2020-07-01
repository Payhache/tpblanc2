import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Message } from 'src/app/models/message';
import { catchError, retry } from 'rxjs/internal/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  apiURL = 'http://localhost:3000/messages';
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }; 

  constructor(private http:HttpClient) {
   }
     // Selection de toutes les voitures contenus dans le tableau Voiture JSON
  getAllMessages(): Observable<Message[]> {
    return this.http
      .get<Message[]>(this.apiURL)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Selection d'une seule voiture par l'id
  getOneMessage(id:number): Observable<Message> {
    return this.http.get<Message>(this.apiURL + '/' + id)
    .pipe(
    retry(1),
    catchError(this.handleError)
    );
  }


  // EN cas d'erreure de communication avec le serveur
  handleError(error) {
    //déclaration d'une variable vide pour y associer un message d'erreur
    let errorMessage = '';
    // Si j'ai pas compris ....
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}