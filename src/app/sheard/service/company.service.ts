import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environmentProd} from "../../../enviroments/environment.prod";
import {TokenStorageService} from "../helper/token-storage.service";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient, private tokenStorageService:TokenStorageService) {}
  API_URL = environmentProd.baseUrl + 'api/companies';


    getAll(): Observable<any[]> {
        //return this.http.get<any[]>(this.API_URL);
        let token = "Bearer "+ this.tokenStorageService.getToken();
        let headers = {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            'Authorization': token,
        };
        return this.http.get<{ data: { items: any } }>(this.API_URL, {
            headers,
            observe: 'body'
        }).pipe(
            map(response => response.data.items)
        );
    }

    get(id: any): Observable<any> {
        return this.http.get<any>(`${this.API_URL}/${id}`);
    }

    update(id: any, data: any): Observable<any> {
        return this.http.put(`${this.API_URL}/${id}`, data);
    }

    delete(id: any): Observable<any> {
        return this.http.delete(`${this.API_URL}/${id}`);
    }




}
