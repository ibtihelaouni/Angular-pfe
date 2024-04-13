import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const CATEGORIE_KEY = 'auth-categorie';
const CLUB_KEY = 'auth-club';
const CLUB_VAL = 'val-club';

const ARBITRE_VAL = 'val-arbitre';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }


  public saveCategorie(categorie: any): void {
    window.sessionStorage.removeItem(CATEGORIE_KEY);
    window.sessionStorage.setItem(CATEGORIE_KEY, JSON.stringify(categorie));
  }
  public getCategorie(): any {
    const categorie = window.sessionStorage.getItem(CATEGORIE_KEY);
    if (categorie) {
      return JSON.parse(categorie);
    }
    return {};
  }


  public saveClub(club: any): void {
    window.sessionStorage.removeItem(CLUB_KEY);
    window.sessionStorage.setItem(CLUB_KEY, JSON.stringify(club));
  }
  public getClub(): any {
    const club = window.sessionStorage.getItem(CLUB_KEY);
    if (club) {
      return JSON.parse(club);
    }
    return {};
  }


  public saveClubVal(clubval: any): void {
    window.sessionStorage.removeItem(CLUB_VAL);
    window.sessionStorage.setItem(CLUB_VAL, JSON.stringify(clubval));
  }
  public getClubVal(): any {
    const clubval = window.sessionStorage.getItem(CLUB_VAL);
    if (clubval) {
      return JSON.parse(clubval);
    }
    return {};
  }

  public savearbitre(jous: any): void {
    window.sessionStorage.removeItem(ARBITRE_VAL);
    window.sessionStorage.setItem(ARBITRE_VAL, JSON.stringify(jous));
  }
  public getArbitre_VAL(): any {
    const jous = window.sessionStorage.getItem(ARBITRE_VAL);
    if (jous) {
      return JSON.parse(jous);
    }
    return {};
  }
}
