import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://localhost:5000/api";
  constructor(private http:HttpClient) { }

  getCanList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/candidate');
  }

  addCandidate(val:any) {
    return this.http.post(this.APIUrl+'/candidate', val)
  }

  updateCandidate(val:any) {
    return this.http.put(this.APIUrl+'/candidate', val)
  }

  deleteCandidate(val:any) {
    return this.http.delete(this.APIUrl+'/candidate/' + val)
  }
}
