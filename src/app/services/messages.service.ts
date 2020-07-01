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
// Selection de tous les messages contenus dans le tableau Voiture JSON
  getAllMessages(): Observable<Message[]> {
    return this.http
      .get<Message[]>(this.apiURL)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Selection d'un seul message par l'id
  getOneMessage(id:number): Observable<Message> {
    return this.http.get<Message>(this.apiURL + '/' + id)
    .pipe(
    retry(1),
    catchError(this.handleError)
    );
  }
  
// Creation d'un message 
addMessage(message: Message): Observable<Message> {
  return this.http
    .post<Message>(this.apiURL, message, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
}
// Edition du message 
editMessage(message: Message): Observable<Message> {
  return this.http
    .put<Message>(this.apiURL + '/' + message.id, message, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
}
// Suppression d'un message
deleteMessage(id:number): Observable<Message> {
  return this.http
  .delete<Message>(this.apiURL + '/' + id,this.httpOptions).pipe(retry(1), catchError(this.handleError));
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
