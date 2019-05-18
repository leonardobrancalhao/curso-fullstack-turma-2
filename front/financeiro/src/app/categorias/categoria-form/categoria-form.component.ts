import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
        private service: CategoriaService) {

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
                alert('Categoria salva com sucesso');
                this.onSalvar.emit();
            },
            (error) => {
                alert('Falha ao salvar categoria.\nErro: ' + error.error);
            }
        );
    }

}
