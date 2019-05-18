import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
    selector: 'app-categoria-form',
    templateUrl: './categoria-form.component.html',
    styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit, OnChanges {

    @Output() onSalvar: EventEmitter<any> = new EventEmitter();
    @Input() categoria: any;

    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private service: CategoriaService,
        private messageService: MessageService) {

        this.form = fb.group({
            id: [''],
            nome: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.categoria) {

            if (!this.categoria) {
                this.form.reset();
                this.categoria = {};
            }

            this.form.patchValue(this.categoria);
        }
    }

    salvar() {
        this.service.salvar(this.form.value).subscribe(
            () => {
                this.messageService.add({ key: 'tc', severity: 'success', summary: 'Sucesso', detail: 'Categoria salva' });
                this.onSalvar.emit();
            },
            (error) => {
                this.messageService.add({ key: 'tc', severity: 'error', summary: 'Falha ao salvar categoria', detail: 'Erro: ' + error.error });
            }
        );
    }

}
