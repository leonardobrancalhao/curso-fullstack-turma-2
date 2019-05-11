import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';

declare var $: any;

@Component({
    selector: 'app-categoria-grid',
    templateUrl: './categoria-grid.component.html',
    styleUrls: ['./categoria-grid.component.css']
})
export class CategoriaGridComponent implements OnInit {

    categorias: any = [];

    constructor(private service: CategoriaService) { }

    ngOnInit() {
        this.service.listar().subscribe(
            (response) => {
                this.categorias = response;
            },
            (error) => {
                console.log(error);
                alert('Falha ao carregar categorias');
            }
        );
    }

    nova() {
        $('#modalForm').modal('show');
    }

}
