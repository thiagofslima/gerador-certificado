import { Component, Input } from '@angular/core';
import { SecondaryButtonComponent } from "../secondary-button/secondary-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButtonComponent],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css'
})
export class ItemCertificadoComponent {
  @Input() id: string = '';
  @Input() nomeAluno: string = '';
  @Input() dataEmissao: string = '';

  constructor(private router: Router) {}

  redirecionaCertificado() {
  this.router.navigate(['/certificados', this.id]);
}
}
