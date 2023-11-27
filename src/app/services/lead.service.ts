import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Lead } from '../model/Lead';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private leads: Lead[] = [];
  private leadsSubject = new Subject<Lead[]>();

  constructor(private http: HttpClient) {}

  getLeads(): Observable<Lead[]> {
    return this.http.get<Lead[]>('http://localhost:8080/lead');
  }

  addLead(newLead: Lead): Observable<any> {
    return this.http.post('http://localhost:8080/lead', newLead);
  }

  notifyLeadsUpdated() {
    this.getLeads().subscribe((leads) => {
      this.leads = leads;
      this.leadsSubject.next([...this.leads]);
    });
  }

  getLeadsObservable(): Observable<Lead[]> {
    return this.leadsSubject.asObservable();
  }
}