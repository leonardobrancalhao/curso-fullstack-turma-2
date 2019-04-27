import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-categoria-grid',
    templateUrl: './categoria-grid.component.html',
    styleUrls: ['./categoria-grid.component.css']
})
export class CategoriaGridComponent implements OnInit {

    categorias: any = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get('http://localhost:8080/categorias').subscribe(
            (response) => {
                this.categorias = response;
            },
            (error) => {
                console.log(error);
                alert('Falha ao carregar categorias');
            }
        );
    }

}
