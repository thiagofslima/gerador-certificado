import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { PrimaryButtonComponent } from "./_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "./_components/secondary-button/secondary-button.component";
import { ItemCertificadoComponent } from "./_components/item-certificado/item-certificado.component";
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { CertificadosComponent } from "./pages/certificados/certificados.component";
import { CertificadoFormComponent } from "./pages/certificado-form/certificado-form.component";
import { CertificadoComponent } from "./pages/certificado/certificado.component";
import { CertificadoService } from './_services/certificado.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, PrimaryButtonComponent, SecondaryButtonComponent, ItemCertificadoComponent, BaseUiComponent, CertificadosComponent, CertificadoFormComponent, CertificadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'gerador-certificado';

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
}
