import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ModalAssinaturaComponent } from './Components/modais/modal-assinatura/modal-assinatura.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: '', component: SidebarComponent,
        children: [
            {path: 'home',component: HomeComponent},
            {path: 'modal-teste',component: ModalAssinaturaComponent},
        ]
    }];
