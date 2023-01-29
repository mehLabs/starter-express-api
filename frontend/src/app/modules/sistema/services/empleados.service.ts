import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Empleado from '../models/Empleado';
import { environment } from '../../../../environments/environments';
const backend = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  empleados: BehaviorSubject<Empleado[]> = new BehaviorSubject<Empleado[]>([]);

  constructor(private http: HttpClient) {
    http
      .get(`${backend}/empleados`)
      .subscribe((empleados: any) => this.empleados.next(empleados));
  }

  getEmpleados() {
    return this.empleados.asObservable();
  }
}
