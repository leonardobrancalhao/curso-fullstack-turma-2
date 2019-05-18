import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';
import { CategoriaGridComponent } from './categorias/categoria-grid/categoria-grid.component';
import { LayoutComponent } from './layout/layout.component';
import { LancamentoGridComponent } from './lancamentos/lancamento-grid/lancamento-grid.component';
import { LancamentoFormComponent } from './lancamentos/lancamento-form/lancamento-form.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        CategoriaGridComponent,
        CategoriaFormComponent,
        LancamentoGridComponent,
        LancamentoFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
