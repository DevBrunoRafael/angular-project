import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser = new BehaviorSubject<any | null>(null);

  constructor() { }

  login() {
    // realiza o login do usuário
    // decodificar
    // armazenar as info em observable
    localStorage.setItem("jwt", "badusbisaevbuywveuywveuyvweuv")
  }
}
