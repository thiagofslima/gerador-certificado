import { Injectable } from '@angular/core';
import { Certificado } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  certificados: Certificado[] = [];

  constructor() { }

  adicionarCertificado(certificado: Certificado) {
    this.certificados.push({... certificado}); // copia todos o itens anteriores, e adicione um novo. serve para resolver problema de ponteiro, evita usar mesma instancia

    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }
}
