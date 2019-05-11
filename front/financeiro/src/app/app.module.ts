import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaGridComponent } from './categorias/categoria-grid/categoria-grid.component';
import { LayoutComponent } from './layout/layout.component';
import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';


@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        CategoriaGridComponent,
        CategoriaFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
