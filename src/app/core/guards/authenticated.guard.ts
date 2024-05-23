import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  // verificar se usuário ta logado
  // verificar se ele tem acesso a página

  const temAcesso = false;

  if (temAcesso) {
    return true;
  }

  return inject(Router).createUrlTree(["login"])
};
