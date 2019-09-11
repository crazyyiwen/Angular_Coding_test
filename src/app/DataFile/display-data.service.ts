import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DisplayDataService{
    configUrl = 'https://localhost:44302';
    constructor(private http: HttpClient){

    }
    getJsonData() {
        return this.http.get(this.configUrl + '/api/values');
    }
}