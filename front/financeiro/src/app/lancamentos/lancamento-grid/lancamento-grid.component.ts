import { Component, OnInit } from '@angular/core';
import { LancamentoService } from 'src/app/service/lancamento.service';

declare var $: any;

@Component({
    selector: 'app-lancamento-grid',
    templateUrl: './lancamento-grid.component.html',
    styleUrls: ['./lancamento-grid.component.css']
})
export class LancamentoGridComponent implements OnInit {

    lancamentos: any[] = [];
    lancamentoSelecionado: any;

    constructor(private service: LancamentoService) { }

    ngOnInit() {
        this.service.listar().subscribe(
            (response) => {
                this.lancamentos = response;
            },
            (error) => {
                alert('Falha ao listar lançamentos. Erro: ' + error.error);
            }
        );
    }

    novo() {
        this.lancamentoSelecionado = null;
        $('#modalForm').modal('show');
    }

    edit(lancamento: any) {
        this.lancamentoSelecionado = lancamento;
        $('#modalForm').modal('show');
    }

    remover(id) {
        this.service.remover(id).subscribe(
            () => {
                alert('Lançamento removida com sucesso');
                this.ngOnInit();
            },
            (error) => {
                alert('Falha ao remover lançamento.\nErro: ' + error.error);
            }
        );
    }

}
