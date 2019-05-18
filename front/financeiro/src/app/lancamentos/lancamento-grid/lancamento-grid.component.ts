import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
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
    id: number;

    constructor(private service: LancamentoService,
        private messageService: MessageService) { }

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

    onSalvar(event) {
        $('#modalForm').modal('hide');
        this.ngOnInit();
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
        this.id = id;
        this.messageService.clear();
        this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Atenção', detail: 'Deseja remover o lançamento?' });
    }

    onConfirm() {
        this.messageService.clear('c');

        this.service.remover(this.id).subscribe(
            () => {
                this.messageService.add({ key: 'tc', severity: 'success', summary: 'Sucesso', detail: 'Lançamento removido' });
                this.ngOnInit();
            },
            (error) => {
                this.messageService.add({ key: 'tc', severity: 'error', summary: 'Falha ao remover lançamento', detail: 'Erro: ' + error.error });
            }
        );
    }

    onReject() {
        this.messageService.clear('c');
    }

}
