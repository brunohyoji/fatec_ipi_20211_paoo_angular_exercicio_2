import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colecao-cursos',
  templateUrl: './colecao-cursos.component.html',
  styleUrls: ['./colecao-cursos.component.css']
})
export class ColecaoCursosComponent implements OnInit {

  cursos = [
    {
      nome: 'Análise e Desenvolvimento de Sistemas',
      cargaHoraria: 2800
    },
    {
      nome: 'Big Data',
      cargaHoraria: 2400
    },
    {
      nome: 'Eventos',
      cargaHoraria: 1900
    },
    {
      nome: 'RH',
      cargaHoraria: 1900
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
