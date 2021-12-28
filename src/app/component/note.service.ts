import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class NoteService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<any>(environment.api_url );
  }

  saveNote(note: any): Observable<any> {
    return this.http.post<any>(environment.api_url, note);
  }

  findById(id: any): Observable<any> {
    return this.http.get<any>(environment.api_url + '/' + id)
  }

  deleteNote(id: any): Observable<any> {
    return this.http.delete<any>(environment.api_url + '/' + id)
  }


  updateNote(id: any, note: any): Observable<any> {
    return this.http.put<any>(environment.api_url + '/' + id, note)
  }


}
