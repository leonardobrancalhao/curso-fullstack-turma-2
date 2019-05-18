import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { CategoriaService } from 'src/app/service/categoria.service';
import { LancamentoService } from 'src/app/service/lancamento.service';

@Component({
    selector: 'app-lancamento-form',
    templateUrl: './lancamento-form.component.html',
    styleUrls: ['./lancamento-form.component.css']
})
export class LancamentoFormComponent implements OnInit, OnChanges {

    @Output() onSalvar: EventEmitter<any> = new EventEmitter();
    @Input() lancamento: any;

    form: FormGroup;
    categorias: any[];

    constructor(
        private fb: FormBuilder,
        private service: LancamentoService,
        private categoriaService: CategoriaService) {

        this.form = fb.group({
            id: [''],
            tipo: ['DESPESA', Validators.required],
            descricao: ['', Validators.required],
            valor: ['', Validators.required],
            data: ['', Validators.required],
            categoria: [null]
        });
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.lancamento) {
            if (!this.lancamento) {
                this.form.reset();
                this.lancamento = {};
            }

            if (this.lancamento.data) {
                this.lancamento.data = this.getDataFormatada(this.lancamento.data);
            }

            this.form.patchValue(this.lancamento);
        }
    }

    buscarCategorias(event) {
        this.categoriaService.listarPorNome(event.query).subscribe(
            (response) => {
                this.categorias = response;
            },
            (error) => {
                this.categorias = [];
                alert('Falha ao listar categorias. Erro: ' + error.error);
            }
        );
    }

    salvar() {
        this.service.salvar(this.form.value).subscribe(
            () => {
                alert('Lançamento salvo com sucesso');
                this.onSalvar.emit();
            },
            (error) => {
                alert('Falha ao salvar lançamento. Erro: ' + error.error);
            }
        );
    }

    public getDataFormatada(data?: Date) {
        const dataAux = data ? moment(data) : moment(Date.now());
        return new Date(dataAux.utc().year(), dataAux.utc().month(), dataAux.utc().date());
    }

}
