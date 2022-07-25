import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }


  signOut(): void
  {
  window.sessionStorage.clear();
  }
saveToken(token : string): void
{
localStorage.setItem('token', token)
}

/*
  public saveToken(token:string): void{
    window.sessionStorage.removeItem(TOKEN_KEY);
  }*/
}
