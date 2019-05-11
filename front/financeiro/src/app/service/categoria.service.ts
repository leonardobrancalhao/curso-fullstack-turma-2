import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    constructor(private http: HttpClient) { }

    public listar(): Observable<any> {
        return this.http.get('http://localhost:8080/categorias');
    }

}
