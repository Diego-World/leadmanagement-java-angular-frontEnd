import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lead } from 'src/app/model/Lead';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-lead-display-list',
  templateUrl: './lead-display-list.component.html',
  styleUrls: ['./lead-display-list.component.css']
})
export class LeadDisplayListComponent {
  leads: Lead[] = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.fetchLeads();
  }

  fetchLeads() {
    this.http.get<any[]>('http://localhost:8080/lead')
      .subscribe(leads => this.leads = leads);
  }
}