import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  url: any = 'http://localhost:3000/api/comentarios';
  constructor(private http: HttpClient) { }

  obtenerComentarios(): Observable<any> {
    return this.http.get(this.url)
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`)
  }

  guardar(comentario: any): Observable<any> {
    return this.http.post(this.url, comentario);
  }

}
