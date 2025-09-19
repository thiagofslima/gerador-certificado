import { Routes } from '@angular/router';
import { CertificadoComponent } from './pages/certificado/certificado.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CertificadoFormComponent } from './pages/certificado-form/certificado-form.component';

export const routes: Routes = [
  {
    path: "",
    component: CertificadosComponent
  },
  {
    path: "certificados/novo",
    component: CertificadoFormComponent
  },
  {
    path: "certificados/:id",
    component: CertificadoComponent
  },
];
