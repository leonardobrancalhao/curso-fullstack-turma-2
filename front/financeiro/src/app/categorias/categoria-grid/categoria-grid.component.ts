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
    categoriaSelecionada: any;
    categoriaRemover: any;

    constructor(private service: CategoriaService) { }

    ngOnInit() {
        this.service.listar().subscribe(
            (response) => {
                this.categorias = response;
            },
            (error) => {
                alert('Falha ao carregar categorias');
            }
        );
    }

    nova() {
        $('#modalForm').modal('show');
    }

    onSalvar(event) {
        $('#modalForm').modal('hide');

        this.ngOnInit();
    }

    edit(categoria: any) {
        this.categoriaSelecionada = categoria;
        $('#modalForm').modal('show');
    }

    confirmarRemover(categoria: any) {
        this.categoriaRemover = categoria;
        $('#modalRemover').modal('show');
    }

    remover(id) {        
        this.service.remover(id).subscribe(
            () => {
                alert('Categoria removida com sucesso');
                this.ngOnInit();
            },
            (error) => {
                alert('Falha ao remover categoria.\nErro: ' + error.error);
            }
        );
    }

}
