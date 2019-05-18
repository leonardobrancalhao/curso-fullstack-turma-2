import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { MessageService } from 'primeng/components/common/messageservice';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';
import { CategoriaGridComponent } from './categorias/categoria-grid/categoria-grid.component';
import { LancamentoFormComponent } from './lancamentos/lancamento-form/lancamento-form.component';
import { LancamentoGridComponent } from './lancamentos/lancamento-grid/lancamento-grid.component';
import { LayoutComponent } from './layout/layout.component';


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
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        AutoCompleteModule,
        CalendarModule,
        ToastModule
    ],
    providers: [
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
