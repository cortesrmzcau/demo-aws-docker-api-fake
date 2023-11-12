import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultados: any[] = [];

  constructor(private servicio: ServiceService) {}

  ngOnInit(): void {
    this.servicio.getResultados().subscribe(data => {
      this.resultados = data;
    });
  }
}
