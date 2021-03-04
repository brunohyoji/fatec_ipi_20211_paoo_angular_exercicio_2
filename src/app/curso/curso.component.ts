import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso = "Análise e Desenvolvimento de Sistemas";
  carga_horaria = "2800";

  constructor() { }

  ngOnInit(): void {
  }

}
