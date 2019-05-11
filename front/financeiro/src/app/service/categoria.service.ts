import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    private url = 'http://localhost:8080/categorias';

    constructor(private http: HttpClient) { }

    public listar(): Observable<any> {
        return this.http.get(this.url);
    }

    public salvar(categoria: any): Observable<any> {
        if (!categoria || !categoria.nome) {
            throwError('Categoria inválida');
        }

        return this.http.post(this.url, categoria);
    }

    public remover(id: number): Observable<any> {
        return this.http.delete(this.url + '/' + id);
    }

}
