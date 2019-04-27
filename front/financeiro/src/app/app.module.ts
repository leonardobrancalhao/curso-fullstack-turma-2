import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaGridComponent } from './categorias/categoria-grid/categoria-grid.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        CategoriaGridComponent
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
