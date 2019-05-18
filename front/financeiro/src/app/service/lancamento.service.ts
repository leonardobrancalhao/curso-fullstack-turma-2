import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LancamentoService {

    private url = 'http://localhost:8080/lancamentos';

    constructor(private http: HttpClient) { }

    public listar(): Observable<any> {
        return this.http.get(this.url);
    }

    public remover(id: number): Observable<any> {
        return this.http.delete(this.url + '/' + id);
    }

    public salvar(lancamento: any): Observable<any> {
        return this.http.post(this.url, lancamento);
    }
}
