import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaGridComponent } from './categorias/categoria-grid/categoria-grid.component';
import { LancamentoGridComponent } from './lancamentos/lancamento-grid/lancamento-grid.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'categorias',
                component: CategoriaGridComponent
            },
            {
                path: 'lancamentos',
                component: LancamentoGridComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
