import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LeadService } from 'src/app/services/lead.service';
import { Lead } from 'src/app/model/Lead';

@Component({
  selector: 'app-lead-display-list',
  templateUrl: './lead-display-list.component.html',
  styleUrls: ['./lead-display-list.component.css']
})
export class LeadDisplayListComponent implements OnInit, OnDestroy {
  leads: Lead[] = [];
  private leadsSubscription!: Subscription;

  constructor(private leadService: LeadService) {}

  ngOnInit() {
    this.fetchLeads(); // Trigger the initial fetch when the component is created

    // Subscribe to future updates
    this.leadsSubscription = this.leadService.getLeadsObservable().subscribe((leads) => {
      this.leads = leads;
    });
  }

  ngOnDestroy() {
    this.leadsSubscription.unsubscribe();
  }

  fetchLeads() {
    this.leadService.notifyLeadsUpdated(); // Trigger the initial fetch
  }

  getCardColor(income: number): string {
    if (income >= 0 && income <= 15000) {
      return 'red-card';
    } else if (income > 15000 && income <= 30000) {
      return 'blue-card';
    } else {
      return 'gold-card';
    }
  }
}